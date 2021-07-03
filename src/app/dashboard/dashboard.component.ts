import { Component, OnInit } from '@angular/core';
import {ClientsService} from "./clients/clients.service";
import {OffersService} from "./offers/offers.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedClient: any = undefined;
  selectedOffer: any = undefined;

  constructor(private clientsService: ClientsService, private offersService: OffersService) { }

  ngOnInit(): void {
  }

  onReceiveClient(id: number) {
    this.selectedClient = this.clientsService.getById(id);
    console.log(this.selectedClient);
  }

  onReceiveOffer(id: number) {
    this.selectedOffer = this.offersService.getById(id);
    console.log(this.selectedOffer);
  }


}
