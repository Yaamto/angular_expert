import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutListDisplayComponent } from './vue/dumb/workout-list-display/workout-list-display.component';
import { WorkoutListComponent } from './vue/smart/workout-list/workout-list.component';
import { WorkoutListRountingModule } from './workout-list-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FilterDisplayComponent } from './vue/dumb/filter-display/filter-display.component';
import { FormsModule } from '@angular/forms';
import { ReservationDisplayService } from './application/reservation-display.service';
import { WorkoutService } from './application/workout.service';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [WorkoutListDisplayComponent, WorkoutListComponent, FilterDisplayComponent],
  imports: [
    CommonModule,
    WorkoutListRountingModule,
    CardModule,
    ButtonModule,
    ChipModule,
    DividerModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    FormsModule,
    ToastModule
  ],
  providers: [ReservationDisplayService, WorkoutService]
})
export class WorkoutModule {}
