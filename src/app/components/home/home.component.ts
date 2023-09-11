import { Component } from '@angular/core';
import { HousingLocation } from 'src/app/interfaces/housing-location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly baseUrl: string = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test home',
    city: 'Test city',
    state: 'ST',
    photo: 'someurl.com',
    availableUnits: 99,
    wifi: true,
    laundry: false
  };
}
