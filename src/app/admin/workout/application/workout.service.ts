import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Workout } from 'src/app/shared/domain/workout.model';
import { IWorkoutService } from '../domain/port/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService implements IWorkoutService {

  private apiUrl = 'api/workouts';

  private selectedWorkoutSubject: BehaviorSubject<Workout | null> = new BehaviorSubject<Workout | null>(null);

  constructor(private http: HttpClient) { }

  getAllWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.apiUrl);
  }

  getWorkout(id: number): Observable<Workout> {
    return this.http.get<Workout>(`${this.apiUrl}/${id}`);
  }

  saveWorkout(workout: Workout): Observable<Workout> {
    const newWorkout = this.http.post<Workout>(this.apiUrl, workout);
    newWorkout.subscribe()
    return newWorkout
  }

  updateWorkout(workout: Workout): Observable<Workout> {
    const newWorkout = this.http.put<Workout>(`${this.apiUrl}/${workout.id}`, workout);
    newWorkout.subscribe()
    return newWorkout
  }

  deleteWorkout(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  setSelectedWorkout(workout: Workout | null): void {
    this.selectedWorkoutSubject.next(workout);
  }

  getSelectedWorkout(): Observable<Workout | null> {
    return this.selectedWorkoutSubject.asObservable();
  }
}
