import { Component, inject } from '@angular/core';
import { HousingLocation } from 'src/app/interfaces/housing-location';
import { HousingStaticService } from 'src/app/services/housing.-static.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: HousingLocation[] = [];
  housingService: HousingStaticService = inject(HousingStaticService);
  filteredData: HousingLocation[] = [];

  constructor() {
    this.data = this.housingService.getAllHouses();
    this.filteredData = this.data;
  }

  filterData(filterValue: string) {
    this.filteredData = this.housingService.filterData(filterValue);
  }
}
