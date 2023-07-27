import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutListComponent } from './vue/smart/workout-list/workout-list.component';
import { WorkoutFormComponent } from './vue/smart/workout-form/workout-form.component';


const routes: Routes = [
  {
    path: '',
    component: WorkoutListComponent,
    pathMatch: 'prefix'
  },
  {
    path: 'create',
    component: WorkoutFormComponent,
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutRoutingModule { }