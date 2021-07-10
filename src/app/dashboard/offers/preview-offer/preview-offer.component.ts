import {Component, Input, OnInit} from '@angular/core';
import {OfferModel} from "../../../models/offer-model";
import {BuyOfferComponent} from "../../../buy-offer/buy-offer.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-preview-offer',
  templateUrl: './preview-offer.component.html',
  styleUrls: ['./preview-offer.component.css']
})
export class PreviewOfferComponent implements OnInit {

  @Input() offer: any = undefined;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.offer);
  }

  onBuy():void {
    let dialogRef = this.dialog.open(BuyOfferComponent, { data: {offer: this.offer} });
  }

}
