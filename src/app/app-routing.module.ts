import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicUserComponent } from './user/vue/smart/public-user/public-user.component';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
