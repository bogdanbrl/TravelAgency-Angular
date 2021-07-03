import { Component, OnInit } from '@angular/core';
import {DestinationsService} from "../destinations.service";
import {DestinationModel} from "../../../models/destination-model";

@Component({
  selector: 'app-list-destinations',
  templateUrl: './list-destinations.component.html',
  styleUrls: ['./list-destinations.component.css']
})
export class ListDestinationsComponent implements OnInit {

  destinations: Array<DestinationModel> = [];
  constructor(private destinationsService: DestinationsService) { }

  ngOnInit(): void {
    this.destinations = this.destinationsService.get();
  }

}
