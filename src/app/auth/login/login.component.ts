import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {UserService} from 'src/app/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private userService: UserService, private router: Router) {
    this.loginForm = formBuilder.group({
      email: ['mariuspop@gmail.com', Validators.email],
      password: ['123456', Validators.minLength(6)],
    });
  }

  ngOnInit(): void {
  }

  onLogin(): void {

    // this.router.navigate(["/", "dashboard"])
    // console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((response: any) => {
        console.log(response);

        let user = response;
        this.userService.setUser(user);

        this.router.navigate(["/", "my-account"])


      }, (error) => {
        console.log(error);
        alert(error.error);
      }
    );

  }
}
