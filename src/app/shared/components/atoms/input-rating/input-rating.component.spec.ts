import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRatingComponent } from './input-rating.component';

describe('InputRatingComponent', () => {
  let component: InputRatingComponent;
  let fixture: ComponentFixture<InputRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
