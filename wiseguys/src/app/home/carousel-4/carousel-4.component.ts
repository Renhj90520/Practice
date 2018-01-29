import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-4',
  templateUrl: './carousel-4.component.html',
  styleUrls: ['./carousel-4.component.css']
})
export class Carousel4Component implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
