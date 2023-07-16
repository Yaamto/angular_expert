import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicUserComponent } from './vue/smart/public-user/public-user.component';

const routes: Routes = [
  {
    path: '',
    component: PublicUserComponent,
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }