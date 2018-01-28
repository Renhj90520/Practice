import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { router } from './router';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
