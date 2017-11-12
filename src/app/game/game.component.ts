import { Component, OnInit } from '@angular/core';

import { Store, StoreInventory } from "../models/store";
import { Item } from "../models/item";
import { ItemService } from "../item.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  state = "stock";
  all_items: Item[];
  store: Store;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe((items) => {
      this.all_items = items;

      this.store = {
        id: "store",
        name: "Store of the Gods",
        money: 1000,
        item_slots: 5,
        inventory: [
          { item: this.all_items[0], quantity: 5, price_modifier: 1 },
          { item: this.all_items[1], quantity: 2, price_modifier: 2 }
        ]
      };
    });
  }

  buyItem(item: Item): void {
    let inventory: StoreInventory;

    // TODO: how do we do array.select in ES6?
    for (let inv of this.store.inventory) {
      if (inv.item === item) {
        inventory = inv;
      }
    }

    if (!inventory) {
      inventory = { item: item, quantity: 0, price_modifier: 1 };
      this.store.inventory.push(inventory);
    }

    inventory.quantity++;

    this.store.money -= item.price;
  }

  sellItem(inventory: StoreInventory): void {
    for (let i of this.store.inventory) {
      if (i === inventory) {
        i.quantity--;
        this.store.money += (i.item.price * i.price_modifier);

        if (i.quantity === 0) {
          let index = this.store.inventory.indexOf(i);
          this.store.inventory.splice(index, 1);
        }
      }
    }
  }

  setState(state: string): void {
    this.state = state;
  }

}
