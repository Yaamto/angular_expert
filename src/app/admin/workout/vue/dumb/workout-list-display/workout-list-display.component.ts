import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Workout } from 'src/app/shared/domain/workout.model';

@Component({
  selector: 'app-workout-list-display',
  templateUrl: './workout-list-display.component.html',
  styleUrls: ['./workout-list-display.component.css']
})
export class WorkoutListDisplayComponent {
  @Input() workouts: Workout[];
  @Output() selectWorkout: EventEmitter<Workout> = new EventEmitter();
  @Output() updateWorkout: EventEmitter<Workout> = new EventEmitter();
  @Output() deleteWorkout: EventEmitter<number> = new EventEmitter();
  @Output() addNewWorkout: EventEmitter<void> = new EventEmitter();

  constructor(private router : Router) { }
  onSelect(workout: Workout): void {
    this.selectWorkout.emit(workout);
    this.router.navigate(['/admin/workouts/create']);
  }

  onUpdate(workout: Workout): void {
    this.updateWorkout.emit(workout);
  }

  onDelete(id: number): void {
    this.deleteWorkout.emit(id);
  }
  onAddNew(): void {
    this.addNewWorkout.emit();
    this.router.navigate(['/admin/workouts/create']);
  }
}
