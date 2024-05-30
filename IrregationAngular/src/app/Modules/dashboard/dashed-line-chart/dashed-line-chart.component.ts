import {Component, OnInit} from '@angular/core';
import {CanvasJS} from "@canvasjs/angular-charts";
import {DashboardService} from "../dashboard.service";

@Component({
  selector: 'app-dashed-line-chart',
  templateUrl: './dashed-line-chart.component.html',
  styleUrl: './dashed-line-chart.component.css'
})
export class DashedLineChartComponent implements OnInit {

  chartOptions: any = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Variation of P, N, and K for the Last 20 Records"
    },
    axisX: {
      valueFormatString: "DD MMM",
      crosshair: {
        enabled: true,
        snapToDataPoint: true
      }
    },
    axisY: {
      title: "Value",
      crosshair: {
        enabled: true
      }
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      verticalAlign: "bottom",
      horizontalAlign: "right",
      dockInsidePlotArea: true,
      itemclick: function(e: any) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    },
    data: [
      {
        type: "line",
        showInLegend: true,
        name: "P",
        lineDashType: "dash",
        markerType: "square",
        xValueFormatString: "DD MMM, YYYY",
        dataPoints: []
      },
      {
        type: "line",
        showInLegend: true,
        name: "N",
        lineDashType: "dash",
        dataPoints: []
      },
      {
        type: "line",
        showInLegend: true,
        name: "K",
        lineDashType: "dash",
        dataPoints: []
      }
    ]
  };

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getllDataIrregation().subscribe(
      (data) => {
        // Log raw data from API for debugging
        console.log('Raw data from API:', data);

        // Limit to last 20 records
        const recentData = data.slice(-20);

        const pDataPoints = recentData.map((d: any) => ({
          x: new Date(d.date),
          y: d.p
        }));
        const nDataPoints = recentData.map((d: any) => ({
          x: new Date(d.date),
          y: d.n
        }));
        const kDataPoints = recentData.map((d: any) => ({
          x: new Date(d.date),
          y: d.k
        }));

        // Update chart with P, N, and K data points
        this.chartOptions.data[0].dataPoints = pDataPoints;
        this.chartOptions.data[1].dataPoints = nDataPoints;
        this.chartOptions.data[2].dataPoints = kDataPoints;

        // Log chart options for debugging
        console.log('Updated Chart Options:', this.chartOptions);

        // Render the chart with updated options
        const chart = new CanvasJS.Chart('chartContainer4', this.chartOptions);
        chart.render();
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }
}
