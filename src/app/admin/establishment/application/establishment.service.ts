// establishment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Establishment } from 'src/app/shared/domain/models/establishment.model';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  private apiUrl = 'api/establishments';

  private selectedEstablishmentSubject: BehaviorSubject<Establishment | null> = new BehaviorSubject<Establishment | null>(null);

  constructor(private http: HttpClient) { }

  getAllEstablishments(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(this.apiUrl);
  }

  getEstablishment(id: number): Observable<Establishment> {
    return this.http.get<Establishment>(`${this.apiUrl}/${id}`);
  }

  addEstablishment(establishment: Establishment): Observable<Establishment> {
    const newEstablishment = this.http.post<Establishment>(this.apiUrl, establishment);
    newEstablishment.subscribe()
    return newEstablishment
  }

  updateEstablishment(establishment: Establishment): Observable<Establishment> {
    const newEstablishment = this.http.put<Establishment>(`${this.apiUrl}/${establishment.id}`, establishment);
    newEstablishment.subscribe()
    return newEstablishment
  }

  deleteEstablishment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  setSelectedEstablishment(establishment: Establishment | null): void {
    this.selectedEstablishmentSubject.next(establishment);
  }

  getSelectedEstablishment(): Observable<Establishment | null> {
    return this.selectedEstablishmentSubject.asObservable();
  }
}