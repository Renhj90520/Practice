import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RollCarouselComponent } from './roll-carousel/roll-carousel.component';
import { DropdownInputComponent } from './dropdown-input/dropdown-input.component';
import { AbourusItemComponent } from './abourus-item/abourus-item.component';
import { MemberItemComponent } from './member-item/member-item.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    RollCarouselComponent,
    DropdownInputComponent,
    AbourusItemComponent,
    MemberItemComponent,
    InputGroupComponent,
    BlogItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
