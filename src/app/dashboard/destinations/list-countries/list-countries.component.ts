import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CountryModel} from '../../../models/country-model';
import {DestinationsService} from '../destinations.service';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {

  @Output() onSelect: EventEmitter<number>;
  countries: Array<CountryModel> = [];

  constructor(private destinationsService: DestinationsService) {
    this.onSelect = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.countries = this.destinationsService.getCountries();
  }

  onSelectCountry(id: number) {
    this.onSelect.emit(id);
  }

}
