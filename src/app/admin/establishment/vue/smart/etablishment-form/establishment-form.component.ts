import { Component } from '@angular/core';
import { EstablishmentDisplayService } from '../../../application/establishment-display.service';
import { Establishment } from 'src/app/shared/domain/models/establishment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-establishment-form',
  templateUrl: './establishment-form.component.html',
  styleUrls: ['./establishment-form.component.css']
})
export class EstablishmentFormComponent {
  selectedEstablishment: Establishment | null = null;
  isNewEstablishment: boolean = false;

  constructor(private establishmentService: EstablishmentDisplayService, private router: Router) { }

  ngOnInit(): void {
    this.establishmentService.getSelectedEstablishment().subscribe((establishment: any) => {
      this.selectedEstablishment = establishment;
    });
    this.isNewEstablishment = this.selectedEstablishment === null;
  }

  onSave(): void {
    if (this.selectedEstablishment) {
      if (this.isNewEstablishment) {
        this.establishmentService.addEstablishment(this.selectedEstablishment);
        this.router.navigate(['/establishments']);
      } else {
        this.establishmentService.updateEstablishment(this.selectedEstablishment);
        this.router.navigate(['/establishments']);
      }
    }
  }

  onDelete(): void {
    if (this.selectedEstablishment) {
      this.establishmentService.deleteEstablishment(this.selectedEstablishment.id);
    }
  }

  onAddNew(): void {
    this.establishmentService.setSelectedEstablishment(null);
  }
}
