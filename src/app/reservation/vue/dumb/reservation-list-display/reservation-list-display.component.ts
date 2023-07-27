import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/shared/domain/reservation.model';

@Component({
  selector: 'app-reservation-list-display',
  templateUrl: './reservation-list-display.component.html',
  styleUrls: ['./reservation-list-display.component.css']
})
export class ReservationListDisplayComponent {
  @Input() reservations: Reservation[] = [];
  @Output() deleteReservation: EventEmitter<number> = new EventEmitter();

  constructor(private router : Router) { }

  onDelete(id: number): void {
    this.deleteReservation.emit(id);
  }
}
