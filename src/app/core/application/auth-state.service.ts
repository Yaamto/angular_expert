// auth-state.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private isAdminSubject = new BehaviorSubject<boolean>(false);

  setIsAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  getIsAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
  
  setIsAdmin(isAdmin: boolean) {
    this.isAdminSubject.next(isAdmin);
  }

  getIsAdmin(): Observable<boolean> {
    return this.isAdminSubject.asObservable();
  }
}