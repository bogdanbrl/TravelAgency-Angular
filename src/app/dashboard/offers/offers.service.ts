import { Injectable } from '@angular/core';
import {OfferModel} from "../../models/offer-model";

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  offers: Array<OfferModel> = [];
  id: number = 1;

  constructor() {
    for (let i = 0; i < 5; i++) {
      let offer: OfferModel = {
        id: 0,
        description: 'asdfjhsdifjnoanmsdpamsd',
        price: 10*i,
        title: `sejur ${i}`,
        images: ["https://material.angular.io/assets/img/examples/shiba2.jpg"]
      };
      this.create(offer);
    }
  }

  public create(data: OfferModel) {
    data.id = this.id;
    this.id++;
    this.offers.push(data);
  }

  public update(data: OfferModel) {
    this.offers.forEach((offer: OfferModel, index) => {
      if (offer.id == data.id) {
        this.offers[index] = data;
      }
    })
  }

  public delete(offerId: number) {
    this.offers = this.offers.filter((offer: OfferModel) => offer.id != offerId);
  }

  public get(): Array<OfferModel> {
    return this.offers;
  }

  public getById(offerId: number): OfferModel | undefined {

    // return this.offers.filter((offer: OfferModel) => offer.id == offerId)[0];

    let result: any = undefined;
    this.offers.forEach((offer: OfferModel) => {
      if (offer.id == offerId) {
        result = offer;
      }
    })
    return result;
  }



}
