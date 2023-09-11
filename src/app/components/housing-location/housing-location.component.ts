import { Component, Input } from '@angular/core';
import { HousingLocation } from 'src/app/interfaces/housing-location';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() houseInfo!: HousingLocation;
}
