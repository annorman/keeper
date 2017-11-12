import { Component, OnInit, Input } from '@angular/core';
import { Item } from "../models/item";
import { StateService } from "../state.service";
import { StoreInventory } from "../models/store";

@Component({
  selector: 'app-stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.css']
})
export class StockDisplayComponent implements OnInit {
  @Input() items: Item[];

  constructor(public stateService: StateService) { }

  ngOnInit() {
  }

  // TODO: this should totes be in the store class itself eh
  buyItem(item: Item): void {
    let inventory: StoreInventory;

    // TODO: how do we do array.select in ES6?
    for (let inv of this.stateService.store.inventory) {
      if (inv.item === item) {
        inventory = inv;
      }
    }

    if (!inventory) {
      inventory = { item: item, quantity: 0, price_modifier: 1 };
      this.stateService.store.inventory.push(inventory);
    }

    inventory.quantity++;

    this.stateService.store.money -= item.price;
  }

}
