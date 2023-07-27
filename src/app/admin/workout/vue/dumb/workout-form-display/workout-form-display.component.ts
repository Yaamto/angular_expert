import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Workout } from 'src/app/shared/domain/workout.model';
import { WorkoutDisplayService } from '../../../application/workout-display.service';
import { Theme } from 'src/app/shared/domain/theme.model';
import { WorkoutType } from 'src/app/shared/domain/workoutType.model';
import { Establishment } from 'src/app/shared/domain/establishment.model';

@Component({
  selector: 'app-workout-form-display',
  templateUrl: './workout-form-display.component.html',
  styleUrls: ['./workout-form-display.component.css']
})
export class WorkoutFormDisplayComponent {
  @Input() selectedWorkout: Workout | null = null;
  @Input() isNewWorkout = false;
  @Input() themes: Theme[] = [];
  @Input() workoutTypes: WorkoutType[] = [];
  @Input() establishments: Establishment[] = [];
  newWorkout: any = {};

  @Output() saveWorkout: EventEmitter<Workout> = new EventEmitter();
  @Output() deleteWorkout: EventEmitter<void> = new EventEmitter();
  @Output() addNewWorkout: EventEmitter<void> = new EventEmitter();
  constructor(private workoutService: WorkoutDisplayService) { }

  onSave(): void {
    console.log(this.newWorkout);
    if(this.selectedWorkout !== null){
      Object.assign(this.selectedWorkout, this.newWorkout);
      this.workoutService.setSelectedWorkout(this.selectedWorkout);
      this.saveWorkout.emit();
    }else {
      this.workoutService.setSelectedWorkout(this.newWorkout);
      this.saveWorkout.emit();
    }
  }
  
  onChange(field: keyof Workout, value: any): void {
      (this.newWorkout as any)[field] = value;
  }

  onDelete(): void {
    this.deleteWorkout.emit();
  }

  onAddNew(): void {
    this.addNewWorkout.emit();
  }
}
