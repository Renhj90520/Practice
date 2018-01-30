import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scroll-header',
  templateUrl: './scroll-header.component.html',
  styleUrls: ['./scroll-header.component.css']
})
export class ScrollHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() withControls = 'true';
  @Output() onscroll: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  scroll(offset) {
    this.onscroll.emit(offset);
  }
}
