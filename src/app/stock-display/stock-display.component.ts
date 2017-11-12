import { Component, OnInit, Input } from '@angular/core';
import { Item } from "../models/item";

@Component({
  selector: 'app-stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.css']
})
export class StockDisplayComponent implements OnInit {
  @Input() items: Item[];

  constructor() { }

  ngOnInit() {
  }

}
