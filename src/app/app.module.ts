import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { StockDisplayComponent } from './stock-display/stock-display.component';
import { ItemService } from "./item.service";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StockDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
