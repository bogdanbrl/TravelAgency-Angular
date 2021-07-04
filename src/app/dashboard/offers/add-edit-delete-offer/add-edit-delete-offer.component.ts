import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OfferModel} from "../../../models/offer-model";

@Component({
  selector: 'app-add-edit-delete-offer',
  templateUrl: './add-edit-delete-offer.component.html',
  styleUrls: ['./add-edit-delete-offer.component.css']
})
export class AddEditDeleteOfferComponent implements OnInit, OnChanges {

  @Input() offer: OfferModel | undefined;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      id: [null],
      images: [[''], Validators.compose([Validators.required, Validators.minLength(1)])],
      title: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(15)])],
      price: [0, Validators.compose([Validators.required, Validators.min(0)])],
      contactNumber: ['', Validators.compose([Validators.required, Validators.minLength(10)])]
    });

  }

  ngOnInit(): void {
    this.setupForm();
  }

  private setupForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      images: [[''], Validators.compose([Validators.required, Validators.minLength(1)])],
      title: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(15)])],
      price: [0, Validators.compose([Validators.required, Validators.min(0)])],
      contactNumber: ['', Validators.compose([Validators.required, Validators.minLength(10)])]
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.offer == null) {
      this.setupForm();
    } else {
      this.form = this.formBuilder.group({
        id: [this.offer.id],
        images: [this.offer.images, Validators.compose([Validators.required, Validators.minLength(1)])],
        title: [this.offer.title, Validators.compose([Validators.required, Validators.minLength(6)])],
        description: [this.offer.description, Validators.compose([Validators.required, Validators.minLength(15)])],
        price: [this.offer.price, Validators.compose([Validators.required, Validators.min(0)])],
        contactNumber: [this.offer.contactNumber, Validators.compose([Validators.required, Validators.minLength(10)])]
      })
    }
  }

  onSubmit(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      //TODO: connect with the REST API
    } else {
      //TODO: inform user about errors
    }
  }
















}
