import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../dashboard.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  temperature: number | undefined;
  humidity: number | undefined;
  waterLevel: number | undefined;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getllDataIrregation().subscribe(
      (data) => {
        // Log raw data from API for debugging
        console.log('Raw data from API:', data);

        // Get the last record
        const lastRecord = data[data.length - 1];

        // Assign values to class properties
        this.temperature = lastRecord.tempreature;
        this.humidity = lastRecord.humidity;
        this.waterLevel = lastRecord.water_level;

        // Log values for debugging
        console.log('Last record:', lastRecord);
        console.log('Temperature:', this.temperature);
        console.log('Humidity:', this.humidity);
        console.log('Water Level:', this.waterLevel);
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }
}
