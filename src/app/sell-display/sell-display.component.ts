import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/observable/interval';

import { StateService } from "../state.service";
import { StoreInventory } from "../models/store";
import { Customer } from "../models/customer";
import { MessageService } from "../message.service";

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
    Store closes in {{max_time - timer}} seconds!.
    <button (click)="stateService.setState('stock')" *ngIf="timer == max_time">Buy some stock!!</button>
  `
})
export class SellDisplayComponent implements OnInit {

  constructor(public stateService: StateService, private messageService: MessageService) { }

  o = null;
  timer = 0;
  max_time = 30;
  customers = [];

  ngOnInit() {
    this.messageService.clear();

    this.o = interval(1000);
    this.o.subscribe(t => this.tick(t));
  }

  tick (count: number): void {
    this.timer = count;
    // 1 in 10 chance of a customer coming in?
    let chance_of_customer = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    if (chance_of_customer === 5) {
      let customer = {
        name: "Customer " + (this.customers.length + 1),
        money: Math.floor(Math.random() * (1000 - 100 + 1)) + 100
      };

      this.customers.push(customer);

      this.messageService.add("Customer " + customer.name + " entered the store (with " + customer.money + " gold)");
    }

    // Loop through customers and determine if they bought anything
    for (let customer of this.customers) {
      let chance_of_purchase = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
      if (chance_of_purchase === 2) {
        // TODO: for now just buy whatever, in future check if they can afford it :P
        let i = this.stateService.store.inventory[Math.floor(Math.random() * this.stateService.store.inventory.length)];
        this.messageService.add("Customer " + customer.name + " bought a " + i.item.name + "!");
        this.sellItem(i);
      }

      // Now determine if any are going to leave
      let chance_to_leave = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
      if (chance_to_leave === 5) {
        this.messageService.add("Customer " + customer.name + " left! WHAT A JERK!");

        let index = this.customers.indexOf(customer);
        this.customers.splice(index, 1);
      }
    }

    if (this.timer === this.max_time) {
      this.o.unsubscribe();
    }
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
