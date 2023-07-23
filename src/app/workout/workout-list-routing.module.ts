import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutListComponent } from './vue/smart/workout-list/workout-list.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutListComponent,
    pathMatch: 'prefix',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutListRountingModule {}
