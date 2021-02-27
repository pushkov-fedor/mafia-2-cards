import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealCardsComponent } from './components/deal-cards/deal-cards.component';
import { DealCardsService } from './components/deal-cards/deal-cards.service';

@NgModule({
  declarations: [AppComponent, DealCardsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DealCardsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
