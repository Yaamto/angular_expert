import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/shared/domain/models/user.model';

@Component({
  selector: 'app-login-display',
  templateUrl: './login-display.component.html',
  styleUrls: ['./login-display.component.css']
})
export class LoginDisplayComponent {
  userInfo: Partial<User> = {
    email: '',
    password: ''
  }
  @Output() loginSubmit:  EventEmitter<any> = new EventEmitter();

  login() {
    this.loginSubmit.emit(this.userInfo);
  }
}
