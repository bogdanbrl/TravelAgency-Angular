import {Component, Input, OnInit} from '@angular/core';
import {DestinationModel} from "../../../models/destination-model";

@Component({
  selector: 'app-preview-destination',
  templateUrl: './preview-destination.component.html',
  styleUrls: ['./preview-destination.component.css']
})
export class PreviewDestinationComponent implements OnInit {

  @Input() destination: DestinationModel | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
