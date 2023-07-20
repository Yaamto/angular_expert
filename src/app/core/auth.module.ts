import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './vue/smart/register/register.component';
// import { AuthRoutingModule } from './auth-routing.module';
import { RegisterDisplayComponent } from './vue/dumb/register-display/register-display.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { LoginDisplayComponent } from './vue/dumb/login-display/login-display.component';
import { LoginComponent } from './vue/smart/login/login.component';
import { AuthService } from './application/auth.service';

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterDisplayComponent,
    LoginDisplayComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    
  ],
  providers: [AuthService],
})
export class AuthModule { }
