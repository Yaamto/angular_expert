import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { User } from './shared/domain/user.model';
import { AES, enc } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
private db: any
private TOKEN_SECRET = "C7F78B2D25A64E0E8C9A3B7D6F4G1I9K5M8O2Q0S3U7W5Y4X1Z6J7L2N9P3R1T6V7B9H2G3F6D4E8S2A1K9L3M5N8B2V1C5X7Z9"
  createDb() {
    this.db = {
      users: [
        {
          id: 1,
          lastName: 'Poncet',
          firstName: 'Alexandre',
          email: 'poncet@gmail.com',
          birth_at: new Date(),
          password: 'password',
          idRole: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          lastName: 'Regnault',
          firstName: 'Basile',
          email: 'basile.regnault@gmail.com',
          birth_at: new Date(),
          password: 'password',
          idRole: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      workouts: [
        {
          id: 1,
          capaciteMax: 40,
          dateDebut: new Date(),
          dateFin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          idTheme: 1,
          idWorkoutType: new Date(),
        }
      ],
      themes: [
        {
          id: 1,
          libelle: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      establishments: [
        {
          id: 1,
          nom: 'Basile Fit',
          address: 'Rue des abricots',
          city: 'Lyon',
          cp: 69200,
          openHours: new Date(),
          closeHours: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      reservations: [
        {
          id: 1,
          isConfirmed: true,
          isCanceled: false,
          isUpdated: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          idUsers: 1,
          idWorkout: 1,
        }
      ],
      notifys: [
        {
          id: 1,
          message: "Votre séance du 20 est morte",
          idReservation: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      roles: [
        {
          id: 1,
          libelle: "ROLE_ADMIN",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      workoutTypes: [
        {
          id: 1,
          libelle: "Badminton",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      coachs: [
        {
          id: 1,
          degree: "Master 1 en télécom",
          createdAt: new Date(),
          updatedAt: new Date(),
          idEtablishments: 1,
          idUsers:1,
        }
      ],
      wourkoutsEstablishments: [
        {
          id: 1,
          idWorkout: 1,
          idEtablishments: 2,
        }
      ],
      authentification: [
      ]
    };
    return this.db;
  }

  post(requestInfo: RequestInfo) {
    if (requestInfo.collectionName === 'authentification') {
      if(requestInfo.id === 'login') {
        return this.handleLoginRequest(requestInfo);
      }
      if(requestInfo.id === 'register') {
        return this.handleRegisterRequest(requestInfo);
      }
      if(requestInfo.id === 'checkAuth') {
        return this.checkAuth(requestInfo);
      }
    }
    // Laisser l'API gérer la requête pour les autres collections
    return undefined;
  }

  private handleLoginRequest(requestInfo: any) {
    const userLogin: Partial<User> = requestInfo.req.body;
    const user: User = this.db.users.find((u: User) => u.email === userLogin.email && u.password === userLogin.password) 

    // Vérifier que l'utilisateur existe et renvoie une erreur 401 sinon 
    if(!user){
      return requestInfo.utils.createResponse$(() => ({
        body: {error: 'Adresse email ou mot de passe incorrecte'},
        status: 401,
        statusText: 'Unauthorized'
      }));
    }

    const secretKey = this.TOKEN_SECRET;
    const userData = {
    userId: user.id,
    expiresAt: Math.floor(Date.now() / 1000) + 3600
};

        //Création du token d'authentification
        const token = AES.encrypt(JSON.stringify(userData), secretKey).toString();

        return requestInfo.utils.createResponse$(() => ({
          body: {token: token, user: user},
          status: 200,
          statusText: 'OK'
        }));

  }
  
  private handleRegisterRequest(requestInfo: any) {
    const users = this.db.users; // Accéder à la liste des utilisateurs
    const newUser = requestInfo.req.body;
    const newUserId = users.length + 1;

  // Vérifier que tous les champs requis sont remplis
  if (!newUser.lastName || !newUser.firstName || !newUser.email || !newUser.birth_at || !newUser.password || !newUser.idRole) {
    // Renvoyer une erreur 401 avec un message approprié
    return requestInfo.utils.createResponse$(() => ({
      body: {error: "Tout les champs doivent être remplis"},
      status: 401,
      statusText: 'Unauthorized'
    }));
  }
  // Vérifie les informations d'identification et renvoie une réponse appropriée
  const isEmailTaken = users.some((user: any) => user.email === newUser.email);
  const isPasswordValid = this.isValidPassword(newUser.password); // Replace this condition with your own password validation

  if (isEmailTaken || !isPasswordValid) {
    // Retourne une erreur 401 si l'email est déjà utilisé ou si le mot de passe est invalide
    const errorMessage = isEmailTaken ? 'Email address already in use' : 'Password must contain at least 6 characters';
   return requestInfo.utils.createResponse$(() => ({
      body: {error: errorMessage},
      status: 401,
      statusText: 'Unauthorized'
    }));
  }
  const user = {
    id: newUserId,
    ...newUser,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
    // Réponse bouchonnée pour l'inscription
    const response = {
      id: newUserId,
      message: 'Inscription réussie'
    };

     // Ajoute le nouvel utilisateur à la liste des utilisateurs
      users.push(user);
     
     // Envoie une réponse 200 OK avec la réponse bouchonnée
     return requestInfo.utils.createResponse$(() => ({
       body: response,
       status: 200,
       statusText: 'OK'
      }));
    }
  
  private isValidPassword(password: string): boolean {
    return password.length >= 6; 
  }

  private checkAuth(requestInfo: any) {
    const token = requestInfo.req.body;
    const secretKey = this.TOKEN_SECRET;

    try {
      const decryptedToken = AES.decrypt(token, secretKey).toString(enc.Utf8);
      const userData = JSON.parse(decryptedToken);
      // Stock true si le token est expirée
      const isTokenExpired = userData.expiresAt < Math.floor(Date.now() / 1000);
      // vérifier si le token est expiré
      if (isTokenExpired) {
        return requestInfo.utils.createResponse$(() => ({
          body: false,
          status: 401,
          statusText: 'Unauthorized'
        }));
      }

      return requestInfo.utils.createResponse$(() => ({
        body: true,
        status: 200,
        statusText: 'OK'
      }));

    }catch(error) {
      return requestInfo.utils.createResponse$(() => ({
        body: false,
        status: 401,
        statusText: 'Unauthorized'
      }));
    }
  }
}


