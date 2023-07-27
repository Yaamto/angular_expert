import { Injectable } from '@angular/core';
import { WorkoutService } from './workout.service';
import { Workout } from 'src/app/shared/domain/workout.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutDisplayService {

  constructor(private workoutService: WorkoutService) {}

  getAllWorkouts(): Observable<Workout[]> {
    return this.workoutService.getAllWorkouts();
  }

  getWorkout(id: number): Observable<Workout | undefined> {
    return this.workoutService.getWorkout(id);
  }

  saveWorkout(workout: Workout): void {
    this.workoutService.saveWorkout(workout);
  }

  setSelectedWorkout(workout: Workout | null): void {
    this.workoutService.setSelectedWorkout(workout);
  }

  getSelectedWorkout(): Observable<Workout | null> {
    return this.workoutService.getSelectedWorkout();
  }

  updateWorkout(workout: Workout): Observable<Workout> {
    return this.workoutService.updateWorkout(workout);
  }

  deleteWorkout(id: number): Observable<void> {
    return this.workoutService.deleteWorkout(id);
  }
}
