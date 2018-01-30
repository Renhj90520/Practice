import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-slide',
  templateUrl: './small-slide.component.html',
  styleUrls: ['./small-slide.component.css']
})
export class SmallSlideComponent implements OnInit {
  @Input() items;
  @Input() title;
  @Input() withControls = 'true';
  wrapperWidth: number;
  offset: number;
  current = 0;
  constructor() { }

  ngOnInit() {
    this.wrapperWidth = this.items.length * 225;
    this.offset = 0;
  }
  slideTo(index) {
    this.current = index;
    this.offset = - (index * 225);
  }
}
