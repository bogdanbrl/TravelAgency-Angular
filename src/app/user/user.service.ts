import { Injectable } from '@angular/core';
import {ClientModel} from "../models/client-model";
import {UserModel} from "../models/user-model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Route, Router} from "@angular/router";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), responseType: 'text' as 'json' };

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private user: UserModel | undefined;

  constructor(private http: HttpClient,
              private router: Router) { }
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
    this.router.navigateByUrl('/auth');
  }

  public updateAccount(data: any) {
    return this.http.put(`${environment.apiUrl}/user/editUser`, data, httpOptions);
  }

  public deleteAccount() {
    return this.http.delete(`${environment.apiUrl}/user/deleteUser/` + this.user?.id);
  }
}
