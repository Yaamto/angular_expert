import { Injectable } from '@angular/core';
import { IAuthentication } from '../domain/port/auth';
import { User } from 'src/app/shared/domain/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, of } from 'rxjs';
import { AuthStateService } from './auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthentication{
  private authUrl = 'api/authentification/';
  constructor(private http: HttpClient, private authStateService: AuthStateService) { }

  public register(user: Partial<User>): Observable<User> {
    return this.http.post<User>(this.authUrl + 'register', user)
  }

  public login(user: Partial<User>): Observable<User> {
    return this.http.post<User>(this.authUrl + 'login', user)
  }
  
  public logout(): void {
    this.authStateService.setIsAdmin(false);
    this.authStateService.setIsAuthenticated(false); 
    localStorage.removeItem('token');
  }

  public async isAuthenticated(): Promise<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      this.authStateService.setIsAuthenticated(false); 
      return false;
    }
    try {
      const isAuth = await firstValueFrom(this.http.post<boolean>(this.authUrl + 'checkAuth', token))
      if (!isAuth) {
        this.authStateService.setIsAuthenticated(false); 
        return false;
      }
      this.authStateService.setIsAuthenticated(true); 
      return true;
    } catch (err) {
      this.authStateService.setIsAuthenticated(false); 
      return false;
    }
  }

  public async isAdmin(): Promise<boolean> {
//  We need to use checkAuth before and get the user in localStorage to check if the user is admin with isAdmin
   const isAuth = await this.isAuthenticated()
   if(!isAuth){
     this.authStateService.setIsAuthenticated(false);
     return false
   }
    
   const userLocal = localStorage.getItem('user');
   if(userLocal){
     const user = JSON.parse(userLocal);
      if(user.isAdmin && isAuth){
        this.authStateService.setIsAuthenticated(true);
        this.authStateService.setIsAdmin(true);
        return true;
      } else {
        this.authStateService.setIsAdmin(false);
        return false
      }
   }
   this.authStateService.setIsAdmin(false);
   return false
  }
}
