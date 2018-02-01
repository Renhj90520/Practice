import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RollCarouselComponent } from './roll-carousel/roll-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    RollCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
