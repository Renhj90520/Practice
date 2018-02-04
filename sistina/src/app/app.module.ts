import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { VoteRateComponent } from './vote-rate/vote-rate.component';
import { IconHeaderComponent } from './icon-header/icon-header.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { CornerDateComponent } from './corner-date/corner-date.component';
import { WorkItemComponent } from './work-item/work-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductItemComponent,
    VoteRateComponent,
    IconHeaderComponent,
    NewsItemComponent,
    CornerDateComponent,
    WorkItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
