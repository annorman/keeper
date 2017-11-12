import { Component, OnInit } from '@angular/core';
import { StateService } from "../state.service";
import { StoreInventory } from "../models/store";

@Component({
  selector: 'app-sell-display',
  templateUrl: './sell-display.component.html',
  styleUrls: ['./sell-display.component.css']
})
export class SellDisplayComponent implements OnInit {

  constructor(public stateService: StateService) { }

  ngOnInit() {
  }

  sellItem(inventory: StoreInventory): void {
    for (let i of this.stateService.store.inventory) {
      if (i === inventory) {
        i.quantity--;
        this.stateService.store.money += (i.item.price * i.price_modifier);

        if (i.quantity === 0) {
          let index = this.stateService.store.inventory.indexOf(i);
          this.stateService.store.inventory.splice(index, 1);
        }
      }
    }
  }
}
