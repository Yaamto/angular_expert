import { Component, Input } from '@angular/core';
import { Workout } from 'src/app/shared/domain/workout.model';

@Component({
  selector: 'app-workout-list-display',
  templateUrl: './workout-list-display.component.html',
  styleUrls: ['./workout-list-display.component.css'],
})
export class WorkoutListDisplayComponent {
  @Input() workout: Workout;
}
