import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ErrorModelComponent} from "./error-model/error-model.component";
import {AuthService} from "./auth.service";
import {NgToastModule} from "ng-angular-popup";




@NgModule({
  declarations: [LoginComponent,
    RegisterComponent,
   ErrorModelComponent],
  exports: [
    LoginComponent,
    RegisterComponent,
    ErrorModelComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgToastModule
  ],
  providers: [AuthService,
  HttpClient]

})
export class AuthModule { }
