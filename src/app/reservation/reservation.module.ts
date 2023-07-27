import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from './vue/smart/reservation-list/reservation-list.component';
import { ReservationListDisplayComponent } from './vue/dumb/reservation-list-display/reservation-list-display.component';
import { ReservationDisplayService } from './application/reservation-display.service';
import { ReservationRoutingModule } from './reservation-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [
    ReservationListComponent,
    ReservationListDisplayComponent,
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule

  ],
  providers: [ReservationDisplayService],
})
export class ReservationModule { }
