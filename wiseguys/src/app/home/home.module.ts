import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IntrosComponent } from './intros/intros.component';
import { ScrollHeaderComponent } from './scroll-header/scroll-header.component';
import { RollCarouselComponent } from './roll-carousel/roll-carousel.component';
import { Carousel2Component } from './carousel-2/carousel-2.component';
import { Carousel4Component } from './carousel-4/carousel-4.component';
import { CornerDateComponent } from './corner-date/corner-date.component';
import { SmallSlideComponent } from './small-slide/small-slide.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SmallHeaderPanelComponent } from './small-header-panel/small-header-panel.component';
import { ServiceItemComponent } from './service-item/service-item.component';
import { MemberComponent } from './member/member.component';
import { SmallTabComponent } from './small-tab/small-tab.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    IntrosComponent,
    ScrollHeaderComponent,
    RollCarouselComponent,
    Carousel2Component,
    Carousel4Component,
    CornerDateComponent,
    SmallSlideComponent,
    TestimonialComponent,
    SmallHeaderPanelComponent,
    ServiceItemComponent,
    MemberComponent,
    SmallTabComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
