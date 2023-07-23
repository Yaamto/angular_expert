import { Workout } from 'src/app/shared/domain/workout.model';
import { Observable } from 'rxjs';

export interface IWorkout {
  workouts(workout: Partial<Workout>): Observable<Workout>;
}
