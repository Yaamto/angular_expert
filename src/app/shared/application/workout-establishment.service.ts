import { Injectable } from '@angular/core';
import { WorkoutEstablishment } from '../domain/workoutEstablishment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WorkoutEstablishmentService {
  
  constructor(private http: HttpClient) { }

  saveWorkoutEstablishment(workoutEstablishment: Partial<WorkoutEstablishment>): Observable<Partial<WorkoutEstablishment>> {
    const newWorkoutEstablishment = this.http.post<Partial<WorkoutEstablishment>>("api/workoutsEstablishments", workoutEstablishment);
    newWorkoutEstablishment.subscribe()
    return newWorkoutEstablishment
  }
}
