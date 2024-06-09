import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router, private toastService: NgToastService) {

  }

  toastt(){
    this.toastService.success({
      detail : "Success",
      summary: "Otp send successfuly",
      duration: 5000,
      position: 'topRight'

    })
  }


  logout() {
    // Autres opérations de déconnexion si nécessaire

    // Réinitialiser les variables d'authentification

    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    console.log("jjjjjjjj "+localStorage.getItem('id'))

    // Rediriger vers la page de connexion ou une autre page appropriée
    this.router.navigateByUrl('Auth/login');
  }


}
