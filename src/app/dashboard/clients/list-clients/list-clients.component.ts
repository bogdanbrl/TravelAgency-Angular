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
    this.clients = this.clientsService.get();
  }

  onSelectClient(id: number) {
    this.onSelect.emit(id);
  }
}
