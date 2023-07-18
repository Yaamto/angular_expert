import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/application/auth.service';
import { User } from 'src/app/shared/domain/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLoginSubmit(userInfo: Partial<User>) {
    this.authService.login(userInfo).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/users']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
