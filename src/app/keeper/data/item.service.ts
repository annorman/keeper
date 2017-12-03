import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Item } from "../models/item";
import { ITEMS } from "./mock-items";

@Injectable()
export class ItemService {

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }
}
