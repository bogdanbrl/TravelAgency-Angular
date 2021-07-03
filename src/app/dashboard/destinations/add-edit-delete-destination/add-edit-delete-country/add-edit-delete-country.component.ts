import { Component, OnInit } from '@angular/core';
import {ContinentModel} from "../../../../models/continent-model";
import {Constants} from "../../../../utils/constants";
import {DestinationsService} from "../../destinations.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-edit-delete-country',
  templateUrl: './add-edit-delete-country.component.html',
  styleUrls: ['./add-edit-delete-country.component.css']
})
export class AddEditDeleteCountryComponent implements OnInit {

  continents: Array<ContinentModel> = [];
  selectedContinent: ContinentModel | undefined ;
  form: FormGroup;

  constructor(private destinationsService: DestinationsService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      continent: [null]
    })
  }

  ngOnInit(): void {
    this.continents = Constants.CONTINENTS;
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      //TODO: connect with the REST API
    } else {
      //TODO: inform user about errors
    }
  }
}
