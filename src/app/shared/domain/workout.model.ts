import { Establishment } from './establishment.model';
import { Theme } from './theme.model';
import { WorkoutType } from './workoutType.model';
export interface Workout {
  id: number;
  capaciteMax: number;
  dateDebut: Date;
  dateFin: Date;
  createdAt: Date;
  updatedAt: Date;
  idTheme: number;
  idWorkoutType: number;
  theme: Theme;
  workoutType: WorkoutType;
  establishment: Establishment;
  reservationCount: number;
}
