import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import {DashboardService} from "./dashboard.service";
import {BarchartTempComponent} from "./barchart-temp/barchart-temp.component";
import {RouterOutlet} from "@angular/router";
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BarchartHumidityComponent} from "./barchart-humidity/barchart-humidity.component";
import {PiechartWaterLevelComponent} from "./piechart-water-level/piechart-water-level.component";
import {DashedLineChartComponent} from "./dashed-line-chart/dashed-line-chart.component";
import {CardComponent} from "./card/card.component";
import {NgToastModule} from "ng-angular-popup";


@NgModule({
  declarations: [DashboardComponent,
    BarchartTempComponent,
    BarchartHumidityComponent,
    PiechartWaterLevelComponent,
    DashedLineChartComponent,
    CardComponent,],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterOutlet,
    CanvasJSAngularChartsModule,
    HttpClientModule,
    NgToastModule,
  ],
  providers: [DashboardService,
  HttpClient,
  DashboardService]
})
export class DashboardModule { }
