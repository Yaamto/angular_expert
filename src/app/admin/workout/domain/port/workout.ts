import { Observable } from "rxjs";
import { Workout } from "src/app/shared/domain/workout.model";

export interface IWorkoutService {
    getAllWorkouts(): Observable<Workout[]>;
    saveWorkout(workout: Workout): void;
    updateWorkout(workout: Workout): void;
    deleteWorkout(id: number): void;
  }