import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryFilterComponent } from './gallery-filter/gallery-filter.component';
import { PagerComponent } from './pager/pager.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GalleryComponent,
    GalleryItemComponent,
    GalleryFilterComponent,
    PagerComponent,
  ]
})
export class GalleryModule { }
