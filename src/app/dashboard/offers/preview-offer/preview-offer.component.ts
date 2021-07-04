import {Component, Input, OnInit} from '@angular/core';
import {OfferModel} from "../../../models/offer-model";

@Component({
  selector: 'app-preview-offer',
  templateUrl: './preview-offer.component.html',
  styleUrls: ['./preview-offer.component.css']
})
export class PreviewOfferComponent implements OnInit {

  @Input() offer: any = undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.offer);
  }

}
