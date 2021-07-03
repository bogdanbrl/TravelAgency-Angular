import { Injectable } from '@angular/core';
import {ClientModel} from "../models/client-model";
import {UserModel} from "../models/user-model";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private user: UserModel | undefined;

  constructor() { }
  public setUser(user: any): void {
    this.user = user;
  }
  public getUser(): any | undefined {
    return this.user;
  }
  public getToken(): string | undefined {
    if(this.user){
      return this.user.token;
    }
    return undefined;
  }
  public isUserLoged(): boolean {
    return this.user != undefined;
  }
  public logOut(): void {
    this.user = undefined;
  }
}
