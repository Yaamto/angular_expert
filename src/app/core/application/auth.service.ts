import { Injectable } from '@angular/core';
import { IAuthentication } from '../domain/port/auth';
import { User } from 'src/app/shared/domain/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthentication{
  private authUrl = 'api/authentification/';
  constructor(private http: HttpClient) { }

  public register(user: Partial<User>): Observable<User> {
    return this.http.post<User>(this.authUrl + 'register', user)
  }

  public login(user: Partial<User>): Observable<User> {
    return this.http.post<User>(this.authUrl + 'login', user)
  }
  
  public logout(): void {
    localStorage.removeItem('token');
  }

  public async isAuthenticated(): Promise<boolean> {
    const token = localStorage.getItem('token');
    if(!token) {
      return false
    }
    try {
      const isAuth = await firstValueFrom(this.http.post<boolean>(this.authUrl + 'checkAuth', token))
      if(!isAuth) {
        return false
      }
      return true
    }catch(err) {
      return false
    }
    }
}
