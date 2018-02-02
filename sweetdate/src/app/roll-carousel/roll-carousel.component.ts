import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roll-carousel',
  templateUrl: './roll-carousel.component.html',
  styleUrls: ['./roll-carousel.component.css']
})
export class RollCarouselComponent implements OnInit {
  @Input() showNum;
  items = [0, 1, 2, 3, 4, 5, 6];
  width;
  offset;
  current = 0;
  constructor() { }

  ngOnInit() {
    const count = this.items.length;
    this.width = 93 * count + (count - 1) * 12;
    this.offset = 0;
  }
  goLeft() {
    if (this.items.length > this.showNum) {
      this.current--;
      if (this.current < 0) {
        this.current = this.items.length - this.showNum;
      }
      this.offset = -this.current * 105;
    }
  }
  goRight() {
    if (this.items.length > this.showNum) {
      this.current++;
      if (this.current > this.items.length - this.showNum) {
        this.current = 0;
      }
      this.offset = -this.current * 105;
    }
  }
}
