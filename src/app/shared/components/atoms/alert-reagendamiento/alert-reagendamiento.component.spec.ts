import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertReagendamientoComponent } from './alert-reagendamiento.component';

describe('AlertReagendamientoComponent', () => {
  let component: AlertReagendamientoComponent;
  let fixture: ComponentFixture<AlertReagendamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertReagendamientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertReagendamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
