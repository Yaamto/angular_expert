import { Component } from '@angular/core';
import { Reservation } from 'src/app/shared/domain/reservation.model';
import { ReservationDisplayService } from 'src/app/reservation/application/reservation-display.service';
import {User} from "../../../../shared/domain/models/user.model";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  reservations: Reservation[] = [];
  constructor(private reservationService: ReservationDisplayService) { }

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    const user: User = JSON.parse(localStorage.getItem('user') || "");
    this.reservationService.getReservationsForUser(user.id).subscribe((reservations: Reservation[]) => {
      this.reservations = reservations;
    });
  }

  onDeleteReservation(id: number): void {
    this.reservationService.deleteReservation(id).subscribe(() => {
      this.reservations = this.reservations.filter((reservation: Reservation) => reservation.id !== id);
    });
  }
}
