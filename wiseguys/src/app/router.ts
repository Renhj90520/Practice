import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';

export const router = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent }
]);
