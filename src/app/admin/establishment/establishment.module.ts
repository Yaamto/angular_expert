import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentListComponent } from './vue/smart/etablishment-list/establishment-list.component';
import { EstablishmentListDisplayComponent } from './vue/dumb/etablishment-list-display/establishment-list-display.component';
import { EstablishmentDisplayService } from './application/establishment-display.service';
import { EstablishmentFormDisplayComponent } from './vue/dumb/etablishment-form-display/establishment-form-display.component';
import { EstablishmentFormComponent } from './vue/smart/etablishment-form/establishment-form.component';
import { EstablishmentRoutingModule } from './establishment-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [
    EstablishmentListComponent,
    EstablishmentListDisplayComponent,
    EstablishmentFormDisplayComponent,
    EstablishmentFormComponent,
  ],
  imports: [
    CommonModule,
    EstablishmentRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule
    
  ],
  providers: [EstablishmentDisplayService],
})
export class EstablishmentModule { }
