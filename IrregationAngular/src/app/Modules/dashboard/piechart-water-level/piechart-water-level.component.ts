import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../dashboard.service";
import {CanvasJS} from "@canvasjs/angular-charts";

@Component({
  selector: 'app-piechart-water-level',
  templateUrl: './piechart-water-level.component.html',
  styleUrl: './piechart-water-level.component.css'
})
export class PiechartWaterLevelComponent implements OnInit {

  chartOptions = {
    animationEnabled: true,
    title: {
      text: "Water Level Distribution"
    },
    data: [{
      type: "pie",
      startAngle: -90,
      indexLabel: "{label}: {y}",
      yValueFormatString: "#,###.##",
      dataPoints: [] as { y: number, label: string }[]
    }]
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    // Fetch data and update the chart
    this.dashboardService.getllDataIrregation().subscribe(
      (data) => {
        // Log raw data from API for debugging
        console.log('Raw data from API:', data);

        // Limit to last 20 records
        const recentData = data.slice(-20);

        // Extract water levels and dates
        const waterLevels = recentData.map((d: any) => ({
          y: d.water_level,
          label: new Date(d.date).toLocaleDateString()
        }));

        // Log processed data for debugging
        console.log('Water Levels:', waterLevels);

        if (waterLevels.length === 0) {
          console.error('No water level data available');
          return;
        }

        // Update chart with water level data
        this.updateChart(waterLevels);
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }

  updateChart(waterLevels: { y: number, label: string }[]): void {
    // Update chart options with water level data

    this.chartOptions.data[0].dataPoints = waterLevels;

    // Log chart options for debugging
    console.log('Updated Chart Options:', this.chartOptions);

    // Render the chart with updated options
    const chart = new CanvasJS.Chart('pieChartContainer3', this.chartOptions);
    chart.render();
  }
}



