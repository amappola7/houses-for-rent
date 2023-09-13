import { Component, inject } from '@angular/core';
import { HousingLocation } from 'src/app/interfaces/housing-location';
import { HousingApiService } from 'src/app/services/housing-api.service';
// import { HousingStaticService } from 'src/app/services/housing.-static.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: HousingLocation[] = [];
  // housingService: HousingStaticService = inject(HousingStaticService); // ---> This service uses static data from fakeData.ts
  housingService: HousingApiService = inject(HousingApiService) // This service uses data from the fake API
  filteredData: HousingLocation[] = [];

  constructor() {
    // this.data = this.housingService.getAllHouses(); // ---> This property uses the HousingStaticService
    // this.filteredData = this.data; // ---> This property uses the HousingStaticService

    this.housingService.getAllHouses()
    .then((result: HousingLocation[]) => {
      this.data = result;
      this.filteredData = result;
    })
  }

  filterData(filterValue: string): void {
    this.filteredData = this.filteredData.filter(house => house?.city.toLowerCase().includes(filterValue.toLowerCase()));
  }
}
