import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartTempComponent } from './barchart-temp.component';

describe('BarchartTempComponent', () => {
  let component: BarchartTempComponent;
  let fixture: ComponentFixture<BarchartTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarchartTempComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarchartTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
