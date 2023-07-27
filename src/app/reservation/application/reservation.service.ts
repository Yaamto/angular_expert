// reservation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reservation } from 'src/app/shared/domain/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'api/reservations';

  private selectedReservationSubject: BehaviorSubject<Reservation | null> = new BehaviorSubject<Reservation | null>(null);

  constructor(private http: HttpClient) { }

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl);
  }

  // Méthode pour visualiser les réservations existantes d'un utilisateur
  getReservationsForUser(userId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}?idUsers=${userId}`);
  }

  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  setSelectedReservation(reservation: Reservation | null): void {
    this.selectedReservationSubject.next(reservation);
  }

  getSelectedReservation(): Observable<Reservation | null> {
    return this.selectedReservationSubject.asObservable();
  }
}
