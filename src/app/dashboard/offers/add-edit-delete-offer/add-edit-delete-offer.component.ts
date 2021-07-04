import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OfferModel} from "../../../models/offer-model";
import {OffersService} from "../offers.service";
import {DestinationsService} from "../../destinations/destinations.service";
import {DestinationModel} from "../../../models/destination-model";

@Component({
  selector: 'app-add-edit-delete-offer',
  templateUrl: './add-edit-delete-offer.component.html',
  styleUrls: ['./add-edit-delete-offer.component.css']
})
export class AddEditDeleteOfferComponent implements OnInit, OnChanges {

  @Input() offer: OfferModel | undefined;
  form: FormGroup;
  destinations: Array<DestinationModel> = [];

  constructor(private formBuilder: FormBuilder,
              private offersService: OffersService,
              private destinationsService: DestinationsService) {
    this.form = formBuilder.group({
      id: [null],
      imageUrl: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      title: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(15)])],
      pricePerNight: [0, Validators.compose([Validators.required, Validators.min(0)])],
      contactNumber: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      destinationId: [null],
    });

  }

  ngOnInit(): void {
    this.setupForm();
    this.destinationsService.get().subscribe((response: any) => {
        this.destinations = response;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  private setupForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      imageUrl: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      title: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(15)])],
      pricePerNight: [0, Validators.compose([Validators.required, Validators.min(0)])],
      contactNumber: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      destinationId: [null],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.offer == null) {
      this.setupForm();
    } else {
      this.form = this.formBuilder.group({
        id: [this.offer.id],
        imageUrl: [this.offer.imageUrl, Validators.compose([Validators.required, Validators.minLength(1)])],
        title: [this.offer.title, Validators.compose([Validators.required, Validators.minLength(6)])],
        description: [this.offer.description, Validators.compose([Validators.required, Validators.minLength(15)])],
        pricePerNight: [this.offer.pricePerNight, Validators.compose([Validators.required, Validators.min(0)])],
        contactNumber: [this.offer.contactNumber, Validators.compose([Validators.required, Validators.minLength(10)])],
        destinationId: [this.offer.destinationId],
      })
    }
  }

  onSubmit(): void {
    console.log(this.form.value);
    if (this.form.valid) {

      if (this.form.controls['id'].value == null) {
        this.offersService.create(this.form.value).subscribe((response: any) => {
          console.log(response);
        }, (error) => {
          console.log('error from server');
          console.log(error);
        });
      } else {
        this.offersService.update(this.form.value).subscribe((response: any) => {
          console.log(response);
        }, (error) => {
          console.log('error from server');
          console.log(error);
        });
      }

    } else {
      alert('The offer form is invalid!');
    }
  }

  onDelete(): void {
    this.offersService.delete(this.form.value.id).subscribe((response: any) => {
      console.log(response);
    }, (error) => {
      console.log('error from server');
      console.log(error);
    });
  }

}
