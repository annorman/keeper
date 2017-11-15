import { Component, OnInit } from '@angular/core';
import { StateService } from "../state.service";
import { StoreInventory } from "../models/store";

@Component({
  selector: 'app-sell-display',
  template: `
    <h3>Items for sale:</h3>
    <ul>
      <li *ngFor="let i of stateService.store.inventory">
        <strong>{{i.quantity}} x {{i.item.name}} ({{i.item.sell}})</strong><br />
        <small>{{i.item.description}}</small><br />
        <button (click)="sellItem(i)">Sell to Customer</button>
      </li>
    </ul>
    <hr />
    <button (click)="stateService.setState('stock')">Buy some stock!!</button>
  `
})
export class SellDisplayComponent implements OnInit {

  constructor(public stateService: StateService) { }

  ngOnInit() {
  }

  sellItem(inventory: StoreInventory): void {
    for (let i of this.stateService.store.inventory) {
      if (i === inventory) {
        i.quantity--;
        this.stateService.store.money += i.item.sell;

        if (i.quantity === 0) {
          let index = this.stateService.store.inventory.indexOf(i);
          this.stateService.store.inventory.splice(index, 1);
        }
      }
    }
  }
}
