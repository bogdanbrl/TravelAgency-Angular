import { Injectable } from '@angular/core';
import {DestinationModel} from "../../models/destination-model";
import {CountryModel} from "../../models/country-model";
import {Constants} from "../../utils/constants";

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  private destinations: Array<DestinationModel> = [];
  private id: number = 1;
  private idCountry: number = 1;
  private countries: Array<CountryModel> = [];

  constructor() {
    //add country
    let romania: CountryModel = {
      id: 0,
      name: 'Romania',
      continent: Constants.CONTINENTS[0]
    };
    this.createCountry(romania);

    let china: CountryModel = {
      id: 0,
      name: 'China',
      continent: Constants.CONTINENTS[1]
    };
    this.createCountry(china);

    for (let i = 0; i < 5; i++) {
      let destination: DestinationModel = {
        id: 0,
        description: 'aaaaaaaabbbbbbbbbbdddddddd',
        name: `name${i + 1}`,
        country: this.countries[0]
      };
      this.create(destination);
    }
  }

  public create(data: DestinationModel) {
    data.id = this.id;
    this.id++;
    this.destinations.push(data);
  }

  public update(data: DestinationModel) {
    this.destinations.forEach((destination: DestinationModel, index) => {
      if (destination.id == data.id) {
        this.destinations[index] = data;
      }
    })
  }

  public delete(destinationId: number) {
    this.destinations = this.destinations.filter((destination: DestinationModel) => destination.id != destinationId);
  }

  public get(): Array<DestinationModel> {
    return this.destinations;
  }

  public getById(destinationId: number): DestinationModel | undefined {

    // return this.destinations.filter((destination: DestinationModel) => destination.id == destinationId)[0];

    let result: any = undefined;
    this.destinations.forEach((destination: DestinationModel) => {
      if (destination.id == destinationId) {
        result = destination;
      }
    })
    return result;
  }

  public getCountries(): Array<CountryModel> {
    return this.countries;
  }

  public createCountry(data: any) {
    data.id = this.idCountry;
    this.idCountry++;
    this.countries.push(data);
  }


}
