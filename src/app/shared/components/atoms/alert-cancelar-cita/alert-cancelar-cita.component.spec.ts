import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCancelarCitaComponent } from './alert-cancelar-cita.component';

describe('AlertCancelarCitaComponent', () => {
  let component: AlertCancelarCitaComponent;
  let fixture: ComponentFixture<AlertCancelarCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertCancelarCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertCancelarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
