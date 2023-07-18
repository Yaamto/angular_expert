import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./core/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
