import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend_ecommerce';



   date = new Date().getFullYear();

   date1 = new Date();

// Obtenir la date actuelle
 currentDate = this.date;
 currentDateTime1 = this.date1.toLocaleString();
// Obtenir la date et l'heure actuelles
 currentDateTime = this.date.toLocaleString();
}
