import { Routes } from '@angular/router';
import {LoginComponent} from "./Modules/auth/login/login.component";
import {RegisterComponent} from "./Modules/auth/register/register.component";

export const routes: Routes = [
  { path: '', redirectTo: 'Auth/login', pathMatch: 'full' },
  {
    path: 'Auth',
    loadChildren: () => import('./Modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'Dashboard',
    loadChildren: () => import('./Modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];
