import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartHumidityComponent } from './barchart-humidity.component';

describe('BarchartHumidityComponent', () => {
  let component: BarchartHumidityComponent;
  let fixture: ComponentFixture<BarchartHumidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarchartHumidityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarchartHumidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
