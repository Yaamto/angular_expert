import { Injectable } from '@angular/core';
import { ReservationService } from './reservation.service';
import { Reservation } from 'src/app/shared/domain/reservation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationDisplayService {

  constructor(private reservationService: ReservationService) { }

  addReservation(data: any): Observable<Reservation> {

    return this.reservationService.addReservation(data);
  }
  getWorkoutEstablishment(idWorkout: number, idEstablishment: number): Observable<any> {
    return this.reservationService.getOneWorkoutEstablishments(idWorkout, idEstablishment);
  }
  getOneReservation(idUser: number, idWorkout: number, idEstablishment: number): Observable<Reservation> {
    return this.reservationService.getOneReservation(idUser, idWorkout, idEstablishment);
  }
}
