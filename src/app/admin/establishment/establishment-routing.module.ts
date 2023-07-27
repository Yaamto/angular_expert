import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentListComponent } from './vue/smart/etablishment-list/establishment-list.component';
import { EstablishmentFormComponent } from './vue/smart/etablishment-form/establishment-form.component';




const routes: Routes = [
  {
    path: '',
    component: EstablishmentListComponent,
    pathMatch: 'prefix'
  },
  {
    path: 'create',
    component: EstablishmentFormComponent,
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentRoutingModule { }