import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 data: any;

    constructor() {
        this.data = {
            labels: ['Usuario 1', 'Usuario 2', 'Usuario 3', 'Usuario 4'],
            datasets: [
                {
                    label: 'Pendientes',
                    backgroundColor: '#FFC107',
                    borderColor: '#FFC107',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        }
    }
}
