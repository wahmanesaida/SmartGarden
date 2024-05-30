import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router) {

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
