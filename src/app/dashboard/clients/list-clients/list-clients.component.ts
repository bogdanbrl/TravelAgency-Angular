import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ClientModel} from "../../../models/client-model";
import {ClientsService} from "../clients.service";

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  @Output() onSelect: EventEmitter<number>;
  clients: Array<ClientModel> = [];

  constructor(private clientsService: ClientsService) {
    this.onSelect = new EventEmitter<number>();
  }

  ngOnInit(): void {
    // this.clients = this.clientsService.get();
    this.clientsService.get().subscribe((response: any) => {
      for (let i =0; i < response.length; i++) {
        let client: ClientModel = {
          id: response[i].id,
          firstName: response[i].firstName,
          lastName: response[i].lastName,
          username: response[i].username,
          email: response[i].email,
          retypePassword: '',
          password: ''
        };
        this.clients.push(client);
      }
      },
      (error) => {});
  }

  onSelectClient(id: number) {
    this.onSelect.emit(id);
  }
}
