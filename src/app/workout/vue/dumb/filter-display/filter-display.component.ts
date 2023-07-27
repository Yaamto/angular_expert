import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-display',
  templateUrl: './filter-display.component.html',
  styleUrls: ['./filter-display.component.css']
})
export class FilterDisplayComponent {
    dateFin: Date | null;
    dateDebut: Date | null;
    capaciteMax: Number | null;
    @Output() resetWorkout: EventEmitter<any> = new EventEmitter();
    @Output() onFilter: EventEmitter<any> = new EventEmitter();
    constructor() { }

    applyFilter(): void {
        this.onFilter.emit({dateFin: this.dateFin, dateDebut: this.dateDebut, capaciteMax: this.capaciteMax});
    }
    onReset(){
      this.resetWorkout.emit();
      this.dateFin = null;
      this.dateDebut = null;
      this.capaciteMax = null;
    }
}
