import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingApiService {
  url = 'http://localhost:3000/locations';

  constructor() { }

  async getAllHouses(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHouseById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplicationForm(firstName: string, lastName: string, email: string): void {
    console.log(`Homes application received:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`);
  }
}
