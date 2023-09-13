import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';
import { housingData } from '../data/fakeData';

@Injectable({
  providedIn: 'root'
})
export class HousingStaticService {
  housesDataList: HousingLocation[] = housingData;

  getAllHouses(): HousingLocation[] {
    return this.housesDataList;
  }

  getHouseById(id: Number): HousingLocation | undefined {
    return this.housesDataList.find((house) => house.id === id);
  }

  submitApplicationForm(firstName: string, lastName: string, email: string): void {
    console.log(`Homes application received:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`);
  }

  filterData(filterValue: string) {
    return this.housesDataList.filter(house => house?.city.toLowerCase().includes(filterValue.toLowerCase()));
  }
}
