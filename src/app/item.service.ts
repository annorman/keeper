import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Item } from "./models/item";
import { ITEMS } from "./data/mock-items";

import { MessageService } from './message.service';

@Injectable()
export class ItemService {

  constructor(private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    this.messageService.add("Loaded all items!");
    return of(ITEMS);
  }

}
