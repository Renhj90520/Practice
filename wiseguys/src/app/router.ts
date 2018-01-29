import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

export const router = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent }
]);
