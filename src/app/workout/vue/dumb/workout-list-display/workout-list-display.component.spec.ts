import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutListDisplayComponent } from './workout-list-display.component';

describe('WorkoutListDisplayComponent', () => {
  let component: WorkoutListDisplayComponent;
  let fixture: ComponentFixture<WorkoutListDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutListDisplayComponent]
    });
    fixture = TestBed.createComponent(WorkoutListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
