import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkoutType } from '../domain/workoutType.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutTypeService {

  constructor(private http: HttpClient) { }

  getWorkoutType(): Observable<WorkoutType[]> {
    return this.http.get<WorkoutType[]>('api/workoutTypes')
  }
}
