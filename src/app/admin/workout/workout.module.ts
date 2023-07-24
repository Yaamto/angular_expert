import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutListComponent } from './vue/smart/workout-list/workout-list.component';
import { WorkoutFormComponent } from './vue/smart/workout-form/workout-form.component';
import { WorkoutListDisplayComponent } from './vue/dumb/workout-list-display/workout-list-display.component';
import { WorkoutFormDisplayComponent } from './vue/dumb/workout-form-display/workout-form-display.component';
import { WorkoutRoutingModule } from './workout-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { WorkoutDisplayService } from './application/workout-display.service';
@NgModule({
  declarations: [
    WorkoutListComponent,
    WorkoutFormComponent,
    WorkoutListDisplayComponent,
    WorkoutFormDisplayComponent,
  ],
  imports: [
    CommonModule,
    WorkoutRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule,
  ],
  providers: [WorkoutDisplayService],
})
export class WorkoutModule { }
