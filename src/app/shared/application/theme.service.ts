import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from '../domain/theme.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  getTheme(): Observable<Theme[]> {
    return this.http.get<Theme[]>('api/themes')
  }
}
