import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Establishment } from 'src/app/shared/domain/models/establishment.model';

@Component({
  selector: 'app-establishment-list-display',
  templateUrl: './establishment-list-display.component.html',
  styleUrls: ['./establishment-list-display.component.css']
})
export class EstablishmentListDisplayComponent {
  @Input() establishments: Establishment[] = [];
  @Output() selectEstablishment: EventEmitter<Establishment> = new EventEmitter();
  @Output() updateEstablishment: EventEmitter<Establishment> = new EventEmitter();
  @Output() deleteEstablishment: EventEmitter<number> = new EventEmitter();
  @Output() addNewEstablishment: EventEmitter<void> = new EventEmitter();

  constructor(private router : Router) { }
  onSelect(establishment: Establishment): void {
    this.selectEstablishment.emit(establishment);
    this.router.navigate(['/establishments/create']);
  }

  onUpdate(establishment: Establishment): void {
    this.updateEstablishment.emit(establishment);
  }

  onDelete(id: number): void {
    this.deleteEstablishment.emit(id);
  }
  onAddNew(): void {
    this.addNewEstablishment.emit();
    this.router.navigate(['/establishments/create']);
  }
}
