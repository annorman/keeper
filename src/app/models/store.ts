import { Item } from "./item";

export class Store {
  id: string;
  name: string;
  money: number;
  item_slots: number;
  inventory: StoreInventory[];
}

export class StoreInventory {
  item: Item;
  quantity: number;
  price_modifier: number;
}
