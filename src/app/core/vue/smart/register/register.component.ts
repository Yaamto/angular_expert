import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/application/auth.service';
import { User } from 'src/app/shared/domain/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  user: Partial<User> = {}
constructor(private authService: AuthService) { }


  onRegisterSubmit(userInfo: Partial<User>) {

  this.authService.register(userInfo).subscribe({
    next: (user) => {
      this.user = user;
      console.log(user);
    },
    error: (err) => {
      console.log(err);
    }
  })
}
}
