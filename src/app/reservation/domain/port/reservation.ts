import { Reservation } from "src/app/shared/domain/reservation.model";

export interface IReservationService {
    getAllReservations(): Reservation[];
    getReservationById(id: number): Reservation | undefined;
    saveReservation(reservation: Reservation): void;
    updateReservation(reservation: Reservation): void;
    deleteReservation(id: number): void;
  }
