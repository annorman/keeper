import { Component, OnInit } from '@angular/core';

import { Store, StoreInventory } from "../models/store";
import { Item } from "../models/item";
import { ItemService } from "../item.service";
import { StateService } from "../state.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
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
