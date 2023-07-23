import { Injectable } from '@angular/core';
import { EstablishmentService } from './establishment.service';
import { Establishment } from 'src/app/shared/domain/models/establishment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentDisplayService {

  constructor(private establishmentService: EstablishmentService) {}

  getAllEstablishments(): Observable<Establishment[]> {
    return this.establishmentService.getAllEstablishments();
  }

  getEstablishment(id: number): Observable<Establishment | undefined> {
    return this.establishmentService.getEstablishment(id);
  }

  addEstablishment(establishment: Establishment): void {
    this.establishmentService.addEstablishment(establishment);
  }

  setSelectedEstablishment(establishment: Establishment | null): void {
    this.establishmentService.setSelectedEstablishment(establishment);
  }

  getSelectedEstablishment(): Observable<Establishment | null> {
    return this.establishmentService.getSelectedEstablishment();
  }

  updateEstablishment(establishment: Establishment): Observable<Establishment> {
    return this.establishmentService.updateEstablishment(establishment);
  }

  deleteEstablishment(id: number): Observable<void> {
    return this.establishmentService.deleteEstablishment(id);
  }
}
