import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/shared/domain/workout.model';
import { WorkoutService } from 'src/app/workout/application/workout.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
})
export class WorkoutListComponent implements OnInit {
  workouts: Workout[] = [];
  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.getWorkouts();
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


}
