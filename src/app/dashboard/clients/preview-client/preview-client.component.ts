import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-preview-client',
  templateUrl: './preview-client.component.html',
  styleUrls: ['./preview-client.component.css']
})
export class PreviewClientComponent implements OnInit {

  @Input() client: any;

  constructor() {
    this.client = undefined;
  }

  ngOnInit(): void {
  }


}
