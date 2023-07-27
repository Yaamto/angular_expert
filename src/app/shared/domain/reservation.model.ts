export interface Reservation {
  id: number;
  isConfirmed: boolean;
  isCanceled: boolean;
  isUpdated: boolean;
  createdAt: Date;
  updatedAt: Date;
  idUsers: number;
  idWorkoutEstablishment: number;
}
