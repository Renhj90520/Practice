import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-2',
  templateUrl: './carousel-2.component.html',
  styleUrls: ['./carousel-2.component.css']
})
export class Carousel2Component implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
