import { Component } from '@angular/core';
import {AuthentificationService} from "../services/authentification.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(protected authService:AuthentificationService) {
  }

  logout() {
    this.authService.logout();
  }
}
