import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../dashboard.service";
import {CanvasJS} from "@canvasjs/angular-charts";

@Component({
  selector: 'app-barchart-temp',
  templateUrl: './barchart-temp.component.html',
  styleUrl: './barchart-temp.component.css'
})
export class BarchartTempComponent implements OnInit {
  chartOptions: any = {
    animationEnabled: true,
    title: {
      text: 'Temperature for All Months',
    },
    axisX: {
      title: 'Date',
    },
    axisY: {
      title: 'Temperature (°C)',
    },
    data: [
      {
        type: 'column',
        dataPoints: [],
      },
    ],
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    // Fetch real-time temperature data and update the chart
    this.dashboardService.getllDataIrregation().subscribe(
      (data) => {
        // Log raw data from API for debugging
        console.log('Raw data from API:', data);

        // Limit to last 20 records
        const recentData = data.slice(-100);

        const temperatures = recentData.map((d:any) => d.tempreature);
        const dates = recentData.map((d:any) =>
          new Date(d.date).toLocaleDateString()
        );

        // Log processed data for debugging
        console.log('Temperatures:', temperatures);
        console.log('Dates:', dates);

        if (dates.length === 0 || temperatures.length === 0) {
          console.error('No temperature data available');
          return;
        }

        // Update chart with temperature data for all months
        this.updateChart(temperatures, dates);
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }

  updateChart(temperatures: number[], dates: string[]): void {
    // Update chart options with temperature data for all months
    this.chartOptions.title.text = 'Temperature for All Months';
    this.chartOptions.axisX.title = 'Date';
    this.chartOptions.axisY.title = 'Temperature (°C)';
    this.chartOptions.data[0].dataPoints = dates.map((date, index) => ({
      label: date,
      y: temperatures[index],
    }));

    // Log chart options for debugging
    console.log('Updated Chart Options:', this.chartOptions);

    // Render the chart with updated options
    const chart = new CanvasJS.Chart('chartContainer', this.chartOptions);
    chart.render();
  }
}
