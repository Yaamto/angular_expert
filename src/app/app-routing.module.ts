import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { RegisterComponent } from './core/vue/smart/register/register.component';
import { LoginComponent } from './core/vue/smart/login/login.component';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'workouts',
    loadChildren: () =>
      import('./workout/workout-list.module').then((m) => m.WorkoutModule),
  },
  { path: 'establishments',
    loadChildren: () => import('src/app/admin/establishment/establishment.module').then(m => m.EstablishmentModule),
    canActivate: [AuthGuard] 
  },
  { path: 'auth/login',
    component: LoginComponent 
  },
  { path: 'auth/register',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
