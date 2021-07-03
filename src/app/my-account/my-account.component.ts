import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.form = formBuilder.group({
      id: [this.userService.getUser().id],
      firstName: [this.userService.getUser().firstName, Validators.minLength(3)],
      lastName: [this.userService.getUser().lastName, Validators.minLength(3)],
      email: [this.userService.getUser().email, Validators.email],
      password: ['', Validators.minLength(6)],
      retypePassword: ['', Validators.minLength(6)],
      phone: [this.userService.getUser().phone, Validators.minLength(10)],
    });

  }

  ngOnInit(): void {
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
