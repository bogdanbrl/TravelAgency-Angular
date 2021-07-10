import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {ClientsService} from "../dashboard/clients/clients.service";
import {OffersService} from "../dashboard/offers/offers.service";
import {DestinationsService} from "../dashboard/destinations/destinations.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  description: string = '';

  constructor(private clientsService: ClientsService,
              private offersService: OffersService,
              private destinationsService: DestinationsService) {
    this.description = environment.homeDescription;
  }

  ngOnInit(): void {
  }

}
