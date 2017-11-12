import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { StockDisplayComponent } from './stock-display/stock-display.component';
import { ItemService } from "./item.service";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StockDisplayComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ItemService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
