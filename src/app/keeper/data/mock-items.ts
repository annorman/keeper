import { Item } from "../models/item";

export const ITEMS: Item[] = [
  { id: "potion", name: "Potion", description: "A simple potion for healing minor wounds", buy: 90, sell: 100 },
  { id: "box", name: "Magic Boxes", description: "What's inside? MAGIC!", buy: 10, sell: 50 },
  { id: "herb", name: "Thyme", description: "Everyone loves a good thyme!", buy: 40, sell: 50 },
  { id: "ore", name: "Bronze Ore", description: "Great for smithing and chucking.", buy: 10, sell: 20 },
  { id: "bottles", name: "Mystery Potions",
    description: "Will they make you invisible, or will you shit yourself? Buy one and see!", buy: 10, sell: 100 }
];
