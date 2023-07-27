import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Establishment } from '../domain/establishment.model';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  constructor(private http: HttpClient) { }

  getEstablishment(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>('api/establishments')
  }
}
