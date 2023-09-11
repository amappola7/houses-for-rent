import { Component, inject } from '@angular/core';
import { HousingLocation } from 'src/app/interfaces/housing-location';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.data = this.housingService.getAllHouses();
  }
}
