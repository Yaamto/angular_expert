import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListComponent } from './vue/smart/reservation-list/reservation-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationListComponent,
    pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
