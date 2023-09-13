import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingApiService } from 'src/app/services/housing-api.service';
// import { HousingStaticService } from 'src/app/services/housing.-static.service';
import { HousingLocation } from 'src/app/interfaces/housing-location';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  locationIcon = faLocationDot;
  // housingService: HousingStaticService = inject(HousingStaticService); // ---> This service uses static data from fakeData.ts
  housingService: HousingApiService = inject(HousingApiService); // This service uses data from the fake API
  houseData: HousingLocation | undefined;
  applicationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })

  constructor() {
      this.housingLocationId = Number(this.route.snapshot.params['id']);
      // this.houseData = this.housingService.getHouseById(this.housingLocationId); // ---> This property uses the HousingStaticService
      this.housingService.getHouseById(this.housingLocationId)
      .then((result: HousingLocation | undefined) => {
          this.houseData = result;
      })
    }

  submitApplication() {
    this.housingService.submitApplicationForm(this.applicationForm.value.firstName ?? '', this.applicationForm.value.lastName ?? '', this.applicationForm.value.email ?? '');
  }
}
