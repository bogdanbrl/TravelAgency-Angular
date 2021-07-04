import { Injectable } from '@angular/core';
import {ClientModel} from "../../models/client-model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private clients: Array<ClientModel> = [];
  // private id: number = 1;

  constructor(private http:HttpClient) {
    // for (let i = 0; i < 5; i++) {
    //   let client: ClientModel = {
    //     id: 0,
    //     firstName: 'User ' + i,
    //     lastName: 'Usr',
    //     email: `user${i}@email.com`,
    //     username: 'abc' + i,
    //     password: '',
    //     retypePassword: ''
    //   };
    //   this.create(client);
    // }


  }

  public create(data: ClientModel) {
    // data.id = this.id;
    // this.id++;
    // this.clients.push(data);

    return this.http.post(`${environment.apiUrl}/user/addUser`, data);
  }

  public update(data: ClientModel) {
    return this.http.put(`${environment.apiUrl}/user/editUser`, data);

    // this.clients.forEach((client: ClientModel, index) => {
    //   if (client.id == data.id) {
    //     this.clients[index] = data;
    //   }
    // })
  }

  public delete(clientId: number) {
    // this.clients = this.clients.filter((client: ClientModel) => client.id != clientId);
    return this.http.delete(`${environment.apiUrl}/user/deleteUser/${clientId}`);
  }

  public get() {
    // return this.clients;
    return this.http.get(`${environment.apiUrl}/user/getUsers`);
  }

  public getById(clientId: number) {

    // return this.clients.filter((client: ClientModel) => client.id == clientId)[0];

    // let result: any = undefined;
    // this.clients.forEach((client: ClientModel) => {
    //   if (client.id == clientId) {
    //     result = client;
    //   }
    // })
    // return result;

    return this.http.get(`${environment.apiUrl}/user/getUserById/${clientId}`);
  }



}
