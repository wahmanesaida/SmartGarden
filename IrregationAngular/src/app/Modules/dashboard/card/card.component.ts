import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../dashboard.service";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  temperature: number | undefined;
  humidity: number | undefined;
  waterLevel: number | undefined;
  result: number | undefined;
  status: string="Pompe désactivé";

  constructor(private dashboardService: DashboardService, private toastService: NgToastService) { }

  toggleStatus() {
    if (this.status === "Pompe désactivé") {
      this.status = "Pompe activé";
    } else {
      this.status = "Pompe désactivé";
    }
  }
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
        this.result= lastRecord.result;

        // Log values for debugging
        console.log('Last record:', lastRecord);
        console.log('Temperature:', this.temperature);
        console.log('Humidity:', this.humidity);
        console.log('Water Level:', this.waterLevel);
        console.log("fumé: ", this.result);
        if(this.result == 3) {
          this.toastService.error({
            detail: "Attention il y a présence de fumé !!!!!",
            summary: "",
            duration: 90000,
            position: 'topLeft'
          })
        }
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }
}
