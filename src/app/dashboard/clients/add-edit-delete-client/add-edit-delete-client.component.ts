import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientModel} from "../../../models/client-model";

@Component({
  selector: 'app-add-edit-delete-client',
  templateUrl: './add-edit-delete-client.component.html',
  styleUrls: ['./add-edit-delete-client.component.css']
})
export class AddEditDeleteClientComponent implements OnInit, OnChanges {

  @Input() client: ClientModel | undefined;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      id: [null],
      firstName: ['', Validators.minLength(3)],
      lastName: ['', Validators.minLength(3)],
      email: ['', Validators.email],
      username: ['', Validators.minLength(3)],
      password: ['', Validators.minLength(6)],
      retypePassword: ['', Validators.minLength(6)],
    });

  }

  ngOnInit(): void {
    this.setupForm();
  }

  private setupForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      firstName: ['', Validators.minLength(3)],
      lastName: ['', Validators.minLength(3)],
      email: ['', Validators.email],
      username: ['', Validators.minLength(3)],
      password: ['', Validators.minLength(6)],
      retypePassword: ['', Validators.minLength(6)],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.client == undefined) {
      this.setupForm();
    } else {
      this.form = this.formBuilder.group({
        id: [this.client.id],
        firstName: [this.client.firstName, Validators.minLength(3)],
        lastName: [this.client.lastName, Validators.minLength(3)],
        email: [this.client.email, Validators.email],
        username: [this.client.username, Validators.minLength(3)],
        password: [this.client.password, Validators.minLength(6)],
        retypePassword: [this.client.retypePassword, Validators.minLength(6)],
      });
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
