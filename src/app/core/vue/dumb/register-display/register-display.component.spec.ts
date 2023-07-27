import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDisplayComponent } from './register-display.component';

describe('AuthComponent', () => {
  let component: RegisterDisplayComponent;
  let fixture: ComponentFixture<RegisterDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterDisplayComponent]
    });
    fixture = TestBed.createComponent(RegisterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
