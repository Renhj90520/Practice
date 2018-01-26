import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideCarouselComponent } from './slide-carousel/slide-carousel.component';
import { CardComponent } from './card/card.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { BoxTitleComponent } from './box-title/box-title.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { ThemeItemComponent } from './theme-item/theme-item.component';
import { BrandComponent } from './brand/brand.component';
import { ServiceTabComponent } from './service-tab/service-tab.component';
import { QaItemComponent } from './qa-item/qa-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavbarComponent,
    SlideCarouselComponent,
    CardComponent,
    ProductItemComponent,
    BoxTitleComponent,
    TeamMemberComponent,
    SectionTitleComponent,
    TestimonialComponent,
    BlogItemComponent,
    ThemeItemComponent,
    BrandComponent,
    ServiceTabComponent,
    QaItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
