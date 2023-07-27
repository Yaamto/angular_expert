import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/application/auth.service';
import { User } from 'src/app/shared/domain/models/user.model';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/core/application/auth-state.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private authService: AuthService, private router: Router, private authStateService: AuthStateService) { }


  onLoginSubmit(userInfo: Partial<User>) {
    this.authService.login(userInfo).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.authStateService.setIsAuthenticated(true);
        this.authStateService.setIsAdmin(data.user.isAdmin);
        this.router.navigate(['/workouts']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
