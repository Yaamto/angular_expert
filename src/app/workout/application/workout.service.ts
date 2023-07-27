import { Injectable } from '@angular/core';
import { Workout } from 'src/app/shared/domain/workout.model';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private workoutListUrl = 'api/workouts';
  constructor(private http: HttpClient) {}

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.workoutListUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      }),
    );
  }
  filterWorkouts(capaciteMax: number, dateDebut: Date, dateFin: Date): Observable<any[]> {
    let params = new HttpParams();
    if (capaciteMax) {
      params = params.set('capaciteMax', capaciteMax.toString());
    }
    if (dateDebut) {
      params = params.set('dateDebut', dateDebut.toISOString());
    }
    if (dateFin) {
      params = params.set('dateFin', dateFin.toISOString());
    }

    return this.http.get<any[]>(this.workoutListUrl, { params });
  }
}
