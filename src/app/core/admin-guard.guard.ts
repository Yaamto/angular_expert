import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './application/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  
 async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

   const isAdmin = await this.authService.isAdmin();
   if(!isAdmin) {
     this.router.navigate(['/workouts']);
     return false
   }
    return true
  }
}