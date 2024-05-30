import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const BASE_URL = ['http://localhost:8080/api/v1/auth'];
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getllDataIrregation(): Observable<any>{
    return this.http.get(BASE_URL+'/irregationData');
  }
}
