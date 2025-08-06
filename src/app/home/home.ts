import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation';
import { Housing } from '../housing';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocation],
  template: `
    <section class="results">
      @for (housingLocation of housingLocationList; track $index) {
        <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
      }
    </section>
  `,
  styleUrls: ['./home.css'],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];

  constructor(
    private housingService: Housing
  ) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}

