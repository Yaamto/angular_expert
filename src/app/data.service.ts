import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { User } from './shared/domain/models/user.model';
import { Workout } from './shared/domain/workout.model';
import { Theme } from './shared/domain/theme.model';
import { WorkoutType } from './shared/domain/workoutType.model';
import { Establishment } from './shared/domain/establishment.model';
import { WorkoutEstablishment } from './shared/domain/workoutEstablishment.model';
import { Reservation } from './shared/domain/reservation.model';

import { AES, enc } from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  private db: any;
  private TOKEN_SECRET =
    'C7F78B2D25A64E0E8C9A3B7D6F4G1I9K5M8O2Q0S3U7W5Y4X1Z6J7L2N9P3R1T6V7B9H2G3F6D4E8S2A1K9L3M5N8B2V1C5X7Z9';
  createDb() {
    this.db = {
      users: [
        {
          id: 1,
          lastName: 'Poncet',
          firstName: 'Fabien',
          email: 'poncet@gmail.com',
          birth_at: new Date(),
          password: 'password',
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          lastName: 'Bouterbiat',
          firstName: 'Bilal',
          email: 'bouterbiat@gmail.com',
          birth_at: new Date(),
          password: 'password',
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
          idWorkoutType: 1,
        },
        {
          id: 2,
          capaciteMax: 20,
          dateDebut: new Date(),
          dateFin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          idTheme: 2,
          idWorkoutType: 1,
        },
      ],
      themes: [
        {
          id: 1,
          libelle: 'Combat',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          libelle: 'Collectif',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
        },
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
          idWorkoutEstablishment: 1,
        },
        {
          id: 2,
          isConfirmed: true,
          isCanceled: false,
          isUpdated: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          idUsers: 2,
          idWorkoutEstablishment: 2,
        },
      ],
      notifys: [
        {
          id: 1,
          message: 'Votre séance du 20 est morte',
          idReservation: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      workoutTypes: [
        {
          id: 1,
          libelle: 'Badminton',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          libelle: 'Volleyball',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      coachs: [
        {
          id: 1,
          degree: 'Master 1 en télécom',
          createdAt: new Date(),
          updatedAt: new Date(),
          idEtablishments: 1,
          idUsers: 1,
        },
      ],
      workoutsEstablishments: [
        {
          id: 1,
          idWorkout: 1,
          idEstablishment: 1,
        },
        {
          id: 2,
          idWorkout: 2,
          idEstablishment: 1,
        },
      ],
      authentification: [],
    };
    this.db.workouts = this.getWorkouts();

    return this.db;
  }

  post(requestInfo: RequestInfo) {
    if (requestInfo.collectionName === 'authentification') {
      if (requestInfo.id === 'login') {
        return this.handleLoginRequest(requestInfo);
      }
      if (requestInfo.id === 'register') {
        return this.handleRegisterRequest(requestInfo);
      }
      if (requestInfo.id === 'checkAuth') {
        return this.checkAuth(requestInfo);
      }
    }
  
    return undefined;
  }

  private handleLoginRequest(requestInfo: any) {
    const userLogin: Partial<User> = requestInfo.req.body;
    const user: User = this.db.users.find(
      (u: User) =>
        u.email === userLogin.email && u.password === userLogin.password,
    );

    // Vérifier que l'utilisateur existe et renvoie une erreur 401 sinon
    if (!user) {
      return requestInfo.utils.createResponse$(() => ({
        body: { error: 'Adresse email ou mot de passe incorrecte' },
        status: 401,
        statusText: 'Unauthorized',
      }));
    }

    const secretKey = this.TOKEN_SECRET;
    const userData = {

    userId: user.id,
    expiresAt: Math.floor(Date.now() / 1000) + (3600 * 24) // 24 heures
};

        //Création du token d'authentification
        const token = AES.encrypt(JSON.stringify(userData), secretKey).toString();

        return requestInfo.utils.createResponse$(() => ({
          body: {token: token, user: user},
          status: 200,
          statusText: 'OK'
        }));

    return requestInfo.utils.createResponse$(() => ({
      body: { token: token },
      status: 200,
      statusText: 'OK',
    }));
  }

  private handleRegisterRequest(requestInfo: any) {
    const users = this.db.users; // Accéder à la liste des utilisateurs
    const newUser = requestInfo.req.body;
    const newUserId = users.length + 1;

    // Vérifier que tous les champs requis sont remplis
    if (
      !newUser.lastName ||
      !newUser.firstName ||
      !newUser.email ||
      !newUser.birth_at ||
      !newUser.password ||
      !newUser.idRole
    ) {
      // Renvoyer une erreur 401 avec un message approprié
      return requestInfo.utils.createResponse$(() => ({
        body: { error: 'Tout les champs doivent être remplis' },
        status: 401,
        statusText: 'Unauthorized',
      }));
    }
    // Vérifie les informations d'identification et renvoie une réponse appropriée
    const isEmailTaken = users.some(
      (user: any) => user.email === newUser.email,
    );
    const isPasswordValid = this.isValidPassword(newUser.password); // Replace this condition with your own password validation

    if (isEmailTaken || !isPasswordValid) {
      // Retourne une erreur 401 si l'email est déjà utilisé ou si le mot de passe est invalide
      const errorMessage = isEmailTaken
        ? 'Email address already in use'
        : 'Password must contain at least 6 characters';
      return requestInfo.utils.createResponse$(() => ({
        body: { error: errorMessage },
        status: 401,
        statusText: 'Unauthorized',
      }));
    }
    const user = {
      id: newUserId,
      ...newUser,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Réponse bouchonnée pour l'inscription
    const response = {
      id: newUserId,
      message: 'Inscription réussie',
    };

    // Ajoute le nouvel utilisateur à la liste des utilisateurs
    users.push(user);

    // Envoie une réponse 200 OK avec la réponse bouchonnée
    return requestInfo.utils.createResponse$(() => ({
      body: response,
      status: 200,
      statusText: 'OK',
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
          statusText: 'Unauthorized',
        }));
      }

      return requestInfo.utils.createResponse$(() => ({
        body: true,
        status: 200,
        statusText: 'OK',
      }));
    } catch (error) {
      return requestInfo.utils.createResponse$(() => ({
        body: false,
        status: 401,
        statusText: 'Unauthorized',
      }));
    }
  }
  private getWorkouts(): Workout[] {
    const workouts: Workout[] = this.db.workouts;
    const themes: Theme[] = this.db.themes;
    const workoutTypes: WorkoutType[] = this.db.workoutTypes;
    const establishments: Establishment[] = this.db.establishments;
    const workoutEstablishments: WorkoutEstablishment[] =
      this.db.workoutsEstablishments;
    const reservations: Reservation[] = this.db.reservations;

    // Effectuer une jointure entre les workouts et les thèmes associés en utilisant l'ID du thème
    workouts.forEach((workout: Workout) => {
      const themeId: number = workout.idTheme;
      const theme: Theme | undefined = themes.find(
        (t: Theme) => t.id === themeId,
      );
      if (theme) {
        workout.theme = theme;
      }

      const workoutTypeId: number = workout.idWorkoutType;
      const workoutType: WorkoutType | undefined = workoutTypes.find(
        (wt: WorkoutType) => wt.id === workoutTypeId,
      );
      if (workoutType) {
        workout.workoutType = workoutType;
      }

      const workoutEstablishment: WorkoutEstablishment | undefined =
        workoutEstablishments.find(
          (we: WorkoutEstablishment) => we.idWorkout === workout.id,
        );

      if (workoutEstablishment) {
        const establishmentId: number = workoutEstablishment.idEstablishment;
        const establishment: Establishment | undefined = establishments.find(
          (est: Establishment) => est.id === establishmentId,
        );
        if (establishment) {
          workout.establishment = establishment;
        }
      }
      // Compter le nombre de réservations pour ce workout
      const reservationCount: number = reservations.filter(
        (r: Reservation) => r.idWorkoutEstablishment === workout.id,
      ).length;
      workout.reservationCount = reservationCount;
    });

    return workouts;
  }
}
