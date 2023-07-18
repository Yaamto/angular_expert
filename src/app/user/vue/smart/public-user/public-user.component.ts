import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/domain/user.model';
import { UserService } from 'src/app/user/application/user.service';
@Component({
  selector: 'app-public-user',
  templateUrl: './public-user.component.html',
  styleUrls: ['./public-user.component.css']
})
export class PublicUserComponent implements OnInit {
  users: User[] = []
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers()
  }

  private getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => this.users = users);
  }
}
