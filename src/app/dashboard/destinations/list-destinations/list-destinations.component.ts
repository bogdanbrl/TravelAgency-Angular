import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DestinationsService} from "../destinations.service";
import {DestinationModel} from "../../../models/destination-model";

@Component({
  selector: 'app-list-destinations',
  templateUrl: './list-destinations.component.html',
  styleUrls: ['./list-destinations.component.css']
})
export class ListDestinationsComponent implements OnInit {

  @Output() onSelect: EventEmitter<number>;
  destinations: Array<DestinationModel> = [];

  constructor(private destinationsService: DestinationsService) {
    this.onSelect = new EventEmitter();
  }

  ngOnInit(): void {
    this.destinationsService.get().subscribe((response: any) => {
        console.log(response);
        this.destinations = response;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  onSelectDestination(destinationId: number){
    this.onSelect.emit(destinationId);
  }


}
