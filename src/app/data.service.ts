//src/app/data.services.ts

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  createDb() {
    return {
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
    };
  }
}