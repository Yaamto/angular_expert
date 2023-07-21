import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutListDisplayComponent } from './vue/dumb/workout-list-display/workout-list-display.component';
import { WorkoutListComponent } from './vue/smart/workout-list/workout-list.component';
import { WorkoutListRountingModule } from './workout-list-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [WorkoutListDisplayComponent, WorkoutListComponent],
  imports: [
    CommonModule,
    WorkoutListRountingModule,
    CardModule,
    ButtonModule,
    ChipModule,
    DividerModule,
  ],
})
export class WorkoutModule {}
