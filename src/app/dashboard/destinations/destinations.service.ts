import { Injectable } from '@angular/core';
import {DestinationModel} from "../../models/destination-model";
import {CountryModel} from "../../models/country-model";
import {Constants} from "../../utils/constants";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  private destinations: Array<DestinationModel> = [];
  // private id: number = 1;
  // private idCountry: number = 1;
  private countries: Array<CountryModel> = [];

  constructor(private http: HttpClient) {
    //add country
    // let romania: CountryModel = {
    //   id: 0,
    //   name: 'Romania',
    //   continent: Constants.CONTINENTS[0]
    // };
    // this.createCountry(romania);
    //
    // let china: CountryModel = {
    //   id: 0,
    //   name: 'China',
    //   continent: Constants.CONTINENTS[1]
    // };
    // this.createCountry(china);
    //
    // for (let i = 0; i < 5; i++) {
    //   let destination: DestinationModel = {
    //     id: 0,
    //     description: 'aaaaaaaabbbbbbbbbbdddddddd',
    //     name: `name${i + 1}`,
    //     country: this.countries[0]
    //   };
    //   this.create(destination);
    // }


  }

  public create(data: DestinationModel) {
    // data.id = this.id;
    // this.id++;
    // this.destinations.push(data);

    return this.http.post(`${environment.apiUrl}/destination/addDestination`, data);
  }

  public update(data: DestinationModel) {
    // this.destinations.forEach((destination: DestinationModel, index) => {
    //   if (destination.id == data.id) {
    //     this.destinations[index] = data;
    //   }
    // })

    return this.http.put(`${environment.apiUrl}/destination/editDestination/${data.id}`, data);
  }

  public delete(destinationId: number) {
    // this.destinations = this.destinations.filter((destination: DestinationModel) => destination.id != destinationId);
    return this.http.delete(`${environment.apiUrl}/destination/deleteDestination/${destinationId}`);
  }

  public get(){
    // return this.destinations;
    return this.http.get(`${environment.apiUrl}/destination/getDestinations`);
  }

  public getById(destinationId: number) {

    // return this.destinations.filter((destination: DestinationModel) => destination.id == destinationId)[0];

    // let result: any = undefined;
    // this.destinations.forEach((destination: DestinationModel) => {
    //   if (destination.id == destinationId) {
    //     result = destination;
    //   }
    // })
    // return result;

    return this.http.get(`${environment.apiUrl}/destination/getDestinationById/${destinationId}`);
  }

  public getCountries() {
    // return this.countries;
    return this.http.get(`${environment.apiUrl}/country/getCountries`);
  }

  public createCountry(data: any) {
    // data.id = this.idCountry;
    // this.idCountry++;
    // this.countries.push(data);
    return this.http.post(`${environment.apiUrl}/country/addCountry`, data);
  }

  public updateCountry(data: any) {
    return this.http.put(`${environment.apiUrl}/country/editCountry/${data.id}`, data);
  }

  public deleteCountry(countryId: number) {
    return this.http.delete(`${environment.apiUrl}/country/deleteCountry/${countryId}`);
  }

  public getCountryById(countryId: number) {
    return this.http.get(`${environment.apiUrl}/country/getCountryById/${countryId}`);
  }
}
