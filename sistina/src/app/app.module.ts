import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { VoteRateComponent } from './vote-rate/vote-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductItemComponent,
    VoteRateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
