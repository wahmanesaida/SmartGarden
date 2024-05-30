import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorModelComponent } from './error-model.component';

describe('ErrorModelComponent', () => {
  let component: ErrorModelComponent;
  let fixture: ComponentFixture<ErrorModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
