import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../dashboard.service";
import {CanvasJS} from "@canvasjs/angular-charts";

@Component({
  selector: 'app-barchart-humidity',
  templateUrl: './barchart-humidity.component.html',
  styleUrl: './barchart-humidity.component.css'
})
export class BarchartHumidityComponent implements OnInit {

  chartOptions:any = {
    title: {
      text: "Humidity for All Months"
    },
    animationEnabled: true,
    axisX: {
      title: "Date"
    },
    axisY: {
      title: "Humidity (%)",
      includeZero: true
    },
    data: [{
      type: "bar",
      indexLabel: "{y}",
      yValueFormatString: "#,###'%'",
      dataPoints: []
    }]
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    // Fetch real-time humidity data and update the chart
    this.dashboardService.getllDataIrregation().subscribe(
      (data) => {
        // Log raw data from API for debugging
        console.log('Raw data from API:', data);

        // Limit to last 20 records
        const recentData = data.slice(-30);

        const humidities = recentData.map((d: any) => d.humidity);
        const dates = recentData.map((d: any) =>
          new Date(d.date).toLocaleDateString()
        );

        // Log processed data for debugging
        console.log('Humidities:', humidities);
        console.log('Dates:', dates);

        if (dates.length === 0 || humidities.length === 0) {
          console.error('No humidity data available');
          return;
        }

        // Update chart with humidity data for all months
        this.updateChart(humidities, dates);
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }

  updateChart(humidities: number[], dates: string[]): void {
    // Update chart options with humidity data for all months
    this.chartOptions.title.text = 'Humidity for All Months';
    this.chartOptions.axisX.title = 'Date';
    this.chartOptions.axisY.title = 'Humidity (%)';
    const colors = ["#7469B6", "#AD88C6", "#E1AFD1", "#FFE6E6", "#86469C", "#BC7FCD", "#2A629A", "#57A6A1", "#AC7AB8", "#8C8C8C"];
    this.chartOptions.data[0].dataPoints = dates.map((date, index) => ({
      label: date,
      y: humidities[index],
      color: colors[index % colors.length]
    }));

    // Log chart options for debugging
    console.log('Updated Chart Options:', this.chartOptions);

    // Render the chart with updated options
    const chart = new CanvasJS.Chart('chartContainer2', this.chartOptions);
    chart.render();
  }
}
