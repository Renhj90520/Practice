import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roll-carousel',
  templateUrl: './roll-carousel.component.html',
  styleUrls: ['./roll-carousel.component.css']
})
export class RollCarouselComponent implements OnInit {
  @Input() showNum: number;
  @Input() wrapperWidth: number;
  @Input() offset: number;
  itemWidth: number;
  itemHeight: number;
  constructor() { }

  ngOnInit() {
  }

}
