import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './keeper/game/game.component';
import { StockDisplayComponent } from './keeper/game/stock-display/stock-display.component';
import { SellDisplayComponent } from './keeper/game/sell-display/sell-display.component';
import { MainMenuComponent } from "./keeper/main_menu/main_menu.component";
import { ItemService } from "./keeper/data/item.service";
import { StateService } from './keeper/data/state.service';

import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GameComponent,
    StockDisplayComponent,
    SellDisplayComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ItemService,
    MessageService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
