import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/domain/models/user.model';
import { Reservation } from 'src/app/shared/domain/reservation.model';
import { Workout } from 'src/app/shared/domain/workout.model';
import { ReservationDisplayService } from 'src/app/workout/application/reservation-display.service';
import { WorkoutService } from 'src/app/workout/application/workout.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
  providers: [MessageService]
})
export class WorkoutListComponent implements OnInit {
  workouts: Workout[] = [];
  user: User;
  constructor(private workoutService: WorkoutService, private reservationDisplayService: ReservationDisplayService, private messageService: MessageService, private router: Router) {}

  ngOnInit(): void {
    this.getWorkouts();
    const localUser = localStorage.getItem('user');
    if (localUser) {
      this.user = JSON.parse(localUser);
    }
  }

  getWorkouts() {
    this.workoutService
      .getWorkouts()
      .subscribe((workouts: Workout[]) => (this.workouts = workouts));
  }

  applyFilter(filter: any) {
    this.workoutService.filterWorkouts(filter.capaciteMax, filter.dateDebut, filter.dateFin)
      .subscribe({
        next:(workouts: Workout[]) => {
          this.workouts = workouts;
        },
        error: (error: any) => {
          console.error('Une erreur est survenue lors du filtrage des entraînements :', error);
        }
  });
  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Vous venez de réserver une séance' });
  }
  showError(){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Vous devez être connecté pour pouvoir réserver' });
  }
  addReservation(data: any){
    if(!this.user){
      this.showError();
      return;
    }
    this.reservationDisplayService.addReservation(data).subscribe({
      next: (reservation: Reservation) => {
        this.show()
        setTimeout(() => {
          this.router.navigate(["/reservations"])
        }, 1000);
      },
      error: (error: any) => {
        console.error('Une erreur est survenue lors de la réservation :', error);
      }
    });
  }


}
