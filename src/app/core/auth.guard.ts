import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from 'src/app/core/application/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  
 async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

   const isAuth = await this.authService.isAuthenticated();
   if(!isAuth) {
     this.router.navigate(['/auth/login']);
     return false
   }
    return true
  }
}