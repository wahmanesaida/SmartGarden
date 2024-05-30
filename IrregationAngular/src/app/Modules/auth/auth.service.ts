import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {User} from "../../Models/User.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
const BASE_URL = ['http://localhost:8080/'];
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  public isLoggedInVar: boolean = false;

  constructor(private http: HttpClient) {
    let storageUser;
    const storageUserAsStr = localStorage.getItem('currentUser');
    if (storageUserAsStr) {
      storageUser = JSON.parse(storageUserAsStr);
    }
    this.currentUserSubject = new BehaviorSubject<User>(storageUser);
    this.currentUser = this.currentUserSubject.asObservable();
    this.isLoggedInVar = localStorage.getItem('isLoggedIn') === 'true';
  }

  public isLoggedIn(): boolean {
    return this.isLoggedInVar;
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  signup(signupRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'api/v1/auth/register', signupRequest);
  }


  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'api/v1/auth/authenticate', loginRequest).pipe(
      tap(() => {
        this.isLoggedInVar = true;
        localStorage.setItem('isLoggedIn', 'true');
      })
    );
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  loginError(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'api/v1/auth/login', loginRequest);
  }

  checkCredentialsExist(loginRequest: any): Observable<any> {
    return this.http.post(
      BASE_URL + 'api/v1/auth/checkCredentialsExist',
      loginRequest
    );
  }



  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('JWT');
    if (jwtToken) {
      return new HttpHeaders().set('Authorization', 'Bearer ' + jwtToken);
    } else {
      console.log('JWT token not found in the local Storage');
    }
    return null;
  }


}
