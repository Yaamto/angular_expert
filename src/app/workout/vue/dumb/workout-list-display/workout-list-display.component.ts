import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/shared/domain/models/user.model';
import { Reservation } from 'src/app/shared/domain/reservation.model';
import { Workout } from 'src/app/shared/domain/workout.model';

@Component({
  selector: 'app-workout-list-display',
  templateUrl: './workout-list-display.component.html',
  styleUrls: ['./workout-list-display.component.css'],
})
export class WorkoutListDisplayComponent {
  @Input() workout: Workout;
  @Input() user: User;
  @Output() addReservation: EventEmitter<any> = new EventEmitter();

  onReservation() {
    if(this.user){

    
    const reservation =  {
          isConfirmed: true,
          isCanceled: false,
          isUpdated: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          idUsers: this.user.id,
          idWorkoutEstablishment: null
    }
    const data = {
      reservation: reservation,
      idWorkout: this.workout.id,
      idUser: this.user,
      idEstablishment: this.workout.establishment.id,
    }
    this.addReservation.emit(data);
  }else {
    this.addReservation.emit({
      reservation: null,
      idWorkout: null,
      idUser: null,
      idEstablishment: null,
    });
  }
}
}
