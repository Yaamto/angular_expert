import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Reservation } from 'src/app/shared/domain/reservation.model';
import { Observable, map, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getOneWorkoutEstablishments(idWorkout: number, idEstablishment: number){
    const params = {
      idWorkout: idWorkout,
      idEstablishment: idEstablishment
    }
    return this.http.get<any>(`api/workoutsEstablishments`, {params});
  }
  getOneReservation(idUser: number, idWorkout: number, idEstablishment: number): Observable<Reservation> {

    return this.getOneWorkoutEstablishments(idWorkout, idEstablishment).pipe(
      switchMap((workoutEstablishment) => {
        console.log(workoutEstablishment)
        const idWorkoutEstablishment = workoutEstablishment.id;
        const params = {
          idUser: idUser.toString(),
          idWorkoutEstablishment: idWorkoutEstablishment
        };
        return this.http.get<Reservation>(`api/reservations`, { params });
      })
    );
   
  }

  addReservation(data: any): Observable<Reservation> {
    const {reservation} = data
    this.getOneWorkoutEstablishments(data.idWorkout, data.idEstablishment).subscribe((workoutEstablishment) => {
      reservation.idWorkoutEstablishment = workoutEstablishment[0].id;
    })

    return this.http.post<any>(`api/reservations`, data.reservation);
  }

}
