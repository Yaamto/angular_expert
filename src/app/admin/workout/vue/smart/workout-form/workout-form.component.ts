import { Component } from '@angular/core';
import { Workout } from 'src/app/shared/domain/workout.model';
import { WorkoutDisplayService } from '../../../application/workout-display.service';
import { Router } from '@angular/router';
import { WorkoutType } from 'src/app/shared/domain/workoutType.model';
import { Theme } from 'src/app/shared/domain/theme.model';
import { Establishment } from 'src/app/shared/domain/establishment.model';
import { ThemeService } from 'src/app/shared/application/theme.service';
import { WorkoutTypeService } from 'src/app/shared/application/workout-type.service';
import { EstablishmentService } from 'src/app/shared/application/establishment.service';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent {
  selectedWorkout: Workout | null = null;
  isNewWorkout = false;
  workoutTypes: WorkoutType[] = [];
  themes: Theme[]= [];
  establishments: Establishment[] = [];

  constructor(
    private workoutService: WorkoutDisplayService,
    private router: Router,
    private themeService: ThemeService, 
    private workoutTypeService: WorkoutTypeService,
    private establishmentService: EstablishmentService
    ) { }

  ngOnInit(): void {
    this.workoutService.getSelectedWorkout().subscribe((workout: any) => {
      this.selectedWorkout = workout;
    });
    this.isNewWorkout = this.selectedWorkout === null;
    this.themeService.getTheme().subscribe((themes: Theme[]) => {
      this.themes = themes;
    })
    this.establishmentService.getEstablishment().subscribe((establishments: Establishment[]) => {
      this.establishments = establishments;
    })
    this.workoutTypeService.getWorkoutType().subscribe((workoutTypes: WorkoutType[]) => {
      this.workoutTypes = workoutTypes;
    })
  }

  onSave(): void {
    if (this.selectedWorkout) {
      if (this.isNewWorkout) {
        this.workoutService.saveWorkout(this.selectedWorkout);
        this.router.navigate(['/admin/workouts']);
      } else {
        this.workoutService.updateWorkout(this.selectedWorkout);
        this.router.navigate(['/admin/workouts']);
      }
    }
  }

  onDelete(): void {
    if (this.selectedWorkout) {
      this.workoutService.deleteWorkout(this.selectedWorkout.id);
    }
  }

  onAddNew(): void {
    this.workoutService.setSelectedWorkout(null);
  }
}
