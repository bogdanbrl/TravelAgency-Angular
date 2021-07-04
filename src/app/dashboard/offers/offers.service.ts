import { Injectable } from '@angular/core';
import {OfferModel} from "../../models/offer-model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  offers: Array<OfferModel> = [];
  id: number = 1;

  constructor(private http: HttpClient) {
    // for (let i = 0; i < 5; i++) {
    //   let offer: OfferModel = {
    //     id: 0,
    //     description: 'asdfjhsdifjnoanmsdpamsd',
    //     price: 10*i,
    //     title: `sejur ${i}`,
    //     images: ["https://material.angular.io/assets/img/examples/shiba2.jpg"],
    //     contactNumber: '0777777777'
    //   };
    //   this.create(offer);
    // }


  }

  public create(data: OfferModel) {
    // data.id = this.id;
    // this.id++;
    // this.offers.push(data);

    return this.http.post(`${environment.apiUrl}/offers/addOffer`, data);
  }

  public update(data: OfferModel) {
    // this.offers.forEach((offer: OfferModel, index) => {
    //   if (offer.id == data.id) {
    //     this.offers[index] = data;
    //   }
    // })
    console.log("data");
    console.log(data);
    return this.http.put(`${environment.apiUrl}/offers/editOffer/${data.id}`, data);
  }

  public delete(offerId: number) {
    // this.offers = this.offers.filter((offer: OfferModel) => offer.id != offerId);

    return this.http.delete(`${environment.apiUrl}/offers/deleteOffer/${offerId}`);
  }

  public get() {
    // return this.offers;

    return this.http.get(`${environment.apiUrl}/offers/getOffers`);
  }

  public getById(offerId: number) {

    // return this.offers.filter((offer: OfferModel) => offer.id == offerId)[0];

    // let result: any = undefined;
    // this.offers.forEach((offer: OfferModel) => {
    //   if (offer.id == offerId) {
    //     result = offer;
    //   }
    // })
    // return result;

    return this.http.get(`${environment.apiUrl}/offers/getOfferById/${offerId}`);
  }



}
