import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Establishment } from 'src/app/shared/domain/models/establishment.model';
import { EstablishmentDisplayService } from '../../../application/establishment-display.service';

@Component({
  selector: 'app-establishment-form-display',
  templateUrl: './establishment-form-display.component.html',
  styleUrls: ['./establishment-form-display.component.css']
})
export class EstablishmentFormDisplayComponent {
  @Input() selectedEstablishment: Establishment | null = null;
  @Input() isNewEstablishment: boolean = false;
  newEstablishment: any = {}

  @Output() saveEstablishment: EventEmitter<Establishment> = new EventEmitter();
  @Output() deleteEstablishment: EventEmitter<void> = new EventEmitter();
  @Output() addNewEstablishment: EventEmitter<void> = new EventEmitter();
  constructor(private etablishmentService: EstablishmentDisplayService) { }

  onSave(): void {

    if(this.selectedEstablishment !== null){
      Object.assign(this.selectedEstablishment, this.newEstablishment);
      this.etablishmentService.setSelectedEstablishment(this.selectedEstablishment);
      this.saveEstablishment.emit();
    }else {
      this.etablishmentService.setSelectedEstablishment(this.newEstablishment);
      this.saveEstablishment.emit();
    }
    
  }
  
  onChange(field: keyof Establishment, value: any): void {
      (this.newEstablishment as any)[field] = value;
  }

  onDelete(): void {
    this.deleteEstablishment.emit();
  }

  onAddNew(): void {
    this.addNewEstablishment.emit();
  }
}
