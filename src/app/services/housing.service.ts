import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';
import { housingData } from '../data/fakeData';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  housesDataList: HousingLocation[] = housingData;

  getAllHouses(): HousingLocation[] {
    return this.housesDataList;
  }

  getHouseById(id: Number): HousingLocation | undefined {
    return this.housesDataList.find((house) => house.id === id);
  }
}
