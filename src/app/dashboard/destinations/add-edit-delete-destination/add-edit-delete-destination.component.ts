import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DestinationModel} from "../../../models/destination-model";
import {CountryModel} from "../../../models/country-model";
import {DestinationsService} from "../destinations.service";

@Component({
  selector: 'app-add-edit-delete-destination',
  templateUrl: './add-edit-delete-destination.component.html',
  styleUrls: ['./add-edit-delete-destination.component.css']
})
export class AddEditDeleteDestinationComponent implements OnInit, OnChanges {

  @Input() destination: DestinationModel;
  form: FormGroup;

  selectedCountry: CountryModel | undefined;
  countries: Array<CountryModel> = [];

  constructor(private formBuilder: FormBuilder, private destinationsService: DestinationsService) {
    this.form = formBuilder.group({
      id: [null],
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      country: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(15)])]
    });
    this.destination = {
      id: 0, name: '', description: ''
    }

  }

  ngOnInit(): void {
    this.setupForm();
    // this.countries = this.destinationsService.getCountries();
    this.destinationsService.getCountries().subscribe((response:any) => {
      console.log(response);
      this.countries = response;
      },
      (error) => {
      console.log('error');
      console.log(error);
      });
  }

  private setupForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      country: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(15)])]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.destination == null) {
      this.setupForm();
    } else {
      this.form = this.formBuilder.group({
        id: [this.destination.id],
        name: [this.destination.name, Validators.compose([Validators.required, Validators.minLength(3)])],
        country: [this.destination.country, Validators.compose([Validators.required, Validators.minLength(3)])],
        description: [this.destination.description, Validators.compose([Validators.required, Validators.minLength(15)])]
      });
    }
  }

  onSubmit(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      if (this.form.controls['id'].value == null) {
        this.destinationsService.create(this.form.value).subscribe((response: any) => {
          console.log(response);
        }, (error) => {
          console.log('error from server');
          console.log(error);
        });
      } else {
        this.destinationsService.update(this.form.value).subscribe((response: any) => {
          console.log(response);
        }, (error) => {
          console.log('error from server');
          console.log(error);
        });
      }
    } else {
      alert('The destination form is invalid!');
    }
  }

}
