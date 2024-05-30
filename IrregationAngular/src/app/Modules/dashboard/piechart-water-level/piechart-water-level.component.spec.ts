import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartWaterLevelComponent } from './piechart-water-level.component';

describe('PiechartWaterLevelComponent', () => {
  let component: PiechartWaterLevelComponent;
  let fixture: ComponentFixture<PiechartWaterLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiechartWaterLevelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiechartWaterLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
