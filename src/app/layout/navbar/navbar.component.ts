import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/shared/domain/models/user.model';
import { AuthStateService } from 'src/app/core/application/auth-state.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/application/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{
showMenu = false;
isAuthenticated = false;
isAdmin = false;
adminSubscription: Subscription;
authSubscription: Subscription;
user: User | null = null;


constructor(private authStateService: AuthStateService, private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authStateService.getIsAuthenticated().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
    this.adminSubscription = this.authStateService.getIsAdmin().subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });
    this.authService.isAdmin();

    this.user = JSON.parse(localStorage.getItem('user') || '') as User;
  }
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.adminSubscription.unsubscribe();
  }
  logOut(){
    this.authStateService.setIsAuthenticated(false);
    this.authStateService.setIsAdmin(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
