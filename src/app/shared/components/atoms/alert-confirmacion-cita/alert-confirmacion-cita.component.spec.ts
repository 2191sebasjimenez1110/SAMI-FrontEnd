import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertConfirmacionCitaComponent } from './alert-confirmacion-cita.component';

describe('AlertConfirmacionCitaComponent', () => {
  let component: AlertConfirmacionCitaComponent;
  let fixture: ComponentFixture<AlertConfirmacionCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertConfirmacionCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertConfirmacionCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
