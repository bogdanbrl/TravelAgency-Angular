import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user.service";
import {UserModel} from "../models/user-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-toolbar',
  templateUrl: './navigation-toolbar.component.html',
  styleUrls: ['./navigation-toolbar.component.css']
})
export class NavigationToolbarComponent implements OnInit {

  currentUser: UserModel | undefined;
  constructor(private userService: UserService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.currentUser = this.userService.getUser();
  }

  onHome() {
    this.router.navigateByUrl('/home');
  }

  onDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  onMyAccount() {
    this.router.navigateByUrl('/my-account');
  }

  onAuth() {
    if (this.currentUser) {
      this.userService.logOut();
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('/auth');
    }

  }

}
