import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/shared/domain/models/user.model';
import { AuthStateService } from 'src/app/core/application/auth-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{
showMenu = false;
isAuthenticated = false;
authSubscription: Subscription;
user: User | null = null;


constructor(private authStateService: AuthStateService) { }

  ngOnInit() {
    this.authSubscription = this.authStateService.getIsAuthenticated().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
    console.log(this.authSubscription)
    this.user = JSON.parse(localStorage.getItem('user') || '') as User;
  }
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
  logOut(){
    this.authStateService.setIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
