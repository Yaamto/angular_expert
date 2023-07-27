import { Injectable } from '@angular/core';
import { ReservationService } from './reservation.service';
import { Reservation } from 'src/app/shared/domain/reservation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationDisplayService {

  constructor(private reservationService: ReservationService) {}

  getAllReservations(): Observable<Reservation[]> {
    return this.reservationService.getAllReservations();
  }

  getReservationsForUser(id: number): Observable<Reservation[]> {
    return this.reservationService.getReservationsForUser(id);
  }

  deleteReservation(id: number): Observable<void> {
    return this.reservationService.deleteReservation(id);
  }
}
