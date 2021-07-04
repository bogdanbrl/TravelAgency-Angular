import {Component, Input, OnInit} from '@angular/core';
import {CountryModel} from "../../../models/country-model";

@Component({
  selector: 'app-country-preview',
  templateUrl: './country-preview.component.html',
  styleUrls: ['./country-preview.component.css']
})
export class CountryPreviewComponent implements OnInit {

  @Input() country: CountryModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
