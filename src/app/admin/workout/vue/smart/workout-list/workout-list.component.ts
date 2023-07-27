import { Component } from '@angular/core';
import { Workout } from 'src/app/shared/domain/workout.model';
import { WorkoutDisplayService } from '../../../application/workout-display.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent {
  workouts: Workout[] = [];
  constructor(private workoutService: WorkoutDisplayService) { }

  ngOnInit(): void {
    this.loadWorkouts();
  }

  loadWorkouts(): void {
    this.workoutService.getAllWorkouts().subscribe((workouts: Workout[]) => {
      this.workouts = workouts;
      console.log(workouts)
    });
  }

  onAddNew(): void {
    this.workoutService.setSelectedWorkout(null);
  }

  onSelectWorkout(workout: Workout): void {
    this.workoutService.setSelectedWorkout(workout);
  }

  onUpdateWorkout(workout: Workout): void {
    this.workoutService.updateWorkout(workout).subscribe(() => {
      this.loadWorkouts();
    });
  }

  onDeleteWorkout(id: number): void {
    this.workoutService.deleteWorkout(id).subscribe(() => {
      this.workouts = this.workouts.filter((workout: Workout) => workout.id !== id);
    });
  }
}
