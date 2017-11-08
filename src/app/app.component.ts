import { Component } from '@angular/core';

// TODO: move this into their own files

// Eventually the store details like slots, max_items, etc will be defined at a class level
export class Store {
  id: string;
  name: string;
  money: number;
  item_slots: number;
  inventory: StoreInventory[];
}

export class Item {
  id: string;
  name: string;
  description: string;
  price: number;
}

export class StoreInventory {
  item: Item;
  quantity: number;
  price_modifier: number;
}

// This stuff will come from the API
const potion:   Item = { id: "potion", name: "Potion", description: "A simple potion for healing minor wounds", price: 100 };
const hipotion: Item = { id: "hipotion", name: "Hi-Potion", description: "A potion for more serious wounds", price: 500 };
const bsword:   Item = { id: "bsword", name: "Bronze Sword", description: "A simple sword useful for beginner adventurers", price: 1500 };
const bhelm:    Item = { id: "bhelm", name: "Bronze Helm", description: "A simple helm to protect against weak attacks", price: 1000 };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state = "stock";
  all_items: Item[] = [potion, hipotion, bsword, bhelm];

  store: Store = {
    id: "store",
    name: "Store of the Gods",
    money: 1000,
    item_slots: 5,
    inventory: [
      { item: potion, quantity: 5, price_modifier: 1 },
      { item: bsword, quantity: 2, price_modifier: 2 }
    ]
  };

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
