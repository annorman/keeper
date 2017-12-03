import { Component, OnInit } from '@angular/core';

import { Store, StoreInventory } from "../models/store";
import { Item } from "../models/item";
import { ItemService } from "../data/item.service";
import { StateService } from "../data/state.service";

@Component({
  selector: 'app-game',
  template: `
    <h1>{{stateService.store.name}}</h1>
    <h2 style="color:gold">{{stateService.store.money}} gold</h2>

    <div *ngIf="stateService.state === 'stock'">
      <app-stock-display [items]="all_items"></app-stock-display>
    </div>

    <div *ngIf="stateService.state === 'sell'">
      <app-sell-display></app-sell-display>
    </div>
  `,
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  state = "stock";
  all_items: Item[];
  store: Store;

  constructor(private itemService: ItemService, public stateService: StateService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe((items) => {
      this.all_items = items;

      this.stateService.setStore({
        id: "store",
        name: "Store of the Gods",
        money: 100,
        item_slots: 5,
        inventory: [
          { item: this.all_items[0], quantity: 5, price_modifier: 1 },
          { item: this.all_items[1], quantity: 2, price_modifier: 2 }
        ]
      });
    });
  }
}
