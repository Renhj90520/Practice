import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carouselItems = [
    { src: 'assets/images/banner-width1.png' },
    { src: 'assets/images/banner-width2.png' },
    { src: 'assets/images/banner-width3.png' },
    { src: 'assets/images/banner-width4.png' },
    { src: 'assets/images/banner-width5.png' },
    { src: 'assets/images/banner-width1.png' },
  ];
}
