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
    this.authStateService.setIsAuthenticated(false); // Utilisateur déconnecté
    localStorage.removeItem('token');
  }

  public async isAuthenticated(): Promise<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      this.authStateService.setIsAuthenticated(false); // Utilisateur déconnecté
      return false;
    }
    try {
      const isAuth = await firstValueFrom(this.http.post<boolean>(this.authUrl + 'checkAuth', token))
      if (!isAuth) {
        this.authStateService.setIsAuthenticated(false); // Utilisateur déconnecté
        return false;
      }
      this.authStateService.setIsAuthenticated(true); // Utilisateur connecté
      return true;
    } catch (err) {
      this.authStateService.setIsAuthenticated(false); // Erreur, utilisateur déconnecté
      return false;
    }
  }
}
