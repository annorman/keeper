import { Injectable } from '@angular/core';

import { Store } from '../models/store';

@Injectable()
export class StateService {
  state = "stock";
  store: Store;

  constructor() { }

  setState(state: string): void {
    this.state = state;
  }

  setStore(store: Store): void {
    this.store = store;
  }
}
