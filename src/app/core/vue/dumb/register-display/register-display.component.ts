import { Component, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/domain/user.model';

@Component({
  selector: 'app-register-display',
  templateUrl: './register-display.component.html',
  styleUrls: ['./register-display.component.css']
})
export class RegisterDisplayComponent {
  userInfo: Partial<User> = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birth_at: undefined,
    idRole: 1
  }
  @Output() registerSubmit: EventEmitter<any> = new EventEmitter();

  register() {
    this.registerSubmit.emit(this.userInfo);
  }

}
