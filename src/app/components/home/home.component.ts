import { Component } from '@angular/core';
import { housingData } from 'src/app/data/fakeData';
import { HousingLocation } from 'src/app/interfaces/housing-location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: HousingLocation[] = housingData;

}
