import {Component, Inject, OnInit} from '@angular/core';
import {OfferModel} from "../models/offer-model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ClientModel} from "../models/client-model";
import {ClientsService} from "../dashboard/clients/clients.service";
import {OffersService} from "../dashboard/offers/offers.service";

@Component({
  selector: 'app-buy-offer',
  templateUrl: './buy-offer.component.html',
  styleUrls: ['./buy-offer.component.css']
})
export class BuyOfferComponent implements OnInit {

  users: Array<ClientModel> = [];
  selectedUserId: number = -1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { offer: OfferModel },
              private clientsService: ClientsService,
              private offerService: OffersService,
              public dialogRef: MatDialogRef<BuyOfferComponent>) {
    console.log(data);
  }

  ngOnInit(): void {
    this.clientsService.get().subscribe((response: any) => {
        for (let i = 0; i < response.length; i++) {
          let client: ClientModel = {
            id: response[i].id,
            firstName: response[i].firstName,
            lastName: response[i].lastName,
            username: response[i].username,
            email: response[i].email,
            retypePassword: '',
            password: ''
          };
          this.users.push(client);
        }
      },
      (error) => {
      });
  }

  confirmOffer() {
    this.offerService.buyOffer(this.data.offer.id, this.selectedUserId).subscribe((response: any) => {
        console.log(response);
        this.dialogRef.close();
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
    console.log(this.data.offer.id);
    console.log(this.selectedUserId);
  }

}
