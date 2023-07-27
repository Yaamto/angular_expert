import { Component } from '@angular/core';
import { Establishment } from 'src/app/shared/domain/models/establishment.model';
import { EstablishmentDisplayService } from 'src/app/admin/establishment/application/establishment-display.service';

@Component({
  selector: 'app-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrls: ['./establishment-list.component.css']
})
export class EstablishmentListComponent {
  establishments: Establishment[] = [];
  constructor(private establishmentService: EstablishmentDisplayService) { }

  ngOnInit(): void {
    this.loadEstablishments();
  }

  loadEstablishments(): void {
    this.establishmentService.getAllEstablishments().subscribe((establishments: Establishment[]) => {
      this.establishments = establishments;
    });
  }

  onAddNew(): void {
    this.establishmentService.setSelectedEstablishment(null);
  }

  onSelectEstablishment(establishment: Establishment): void {
    this.establishmentService.setSelectedEstablishment(establishment);
  }

  onUpdateEstablishment(establishment: Establishment): void {
    this.establishmentService.updateEstablishment(establishment).subscribe(() => {
      this.loadEstablishments();
    });
  }

  onDeleteEstablishment(id: number): void {
    this.establishmentService.deleteEstablishment(id).subscribe(() => {
      this.establishments = this.establishments.filter((establishment: Establishment) => establishment.id !== id);
    });
  }
}
