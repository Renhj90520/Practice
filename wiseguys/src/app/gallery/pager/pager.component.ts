import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
  @Input() showNum: number;
  @Input() totalPage: number;
  @Output() onnav = new EventEmitter<number>();
  items = [];
  current = 1;
  showItems = [];
  head: number;
  tail: number;
  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= this.totalPage; i++) {
      this.items.push(i);
    }
    if (this.totalPage > this.showNum) {
      this.head = 0;
      this.tail = this.showNum;
      this.showItems = this.items.slice(this.head, this.tail);
    } else {
      this.showItems = this.items;
    }
  }
  prev() {
    if (this.current > 0) {
      this.current--;
      if (this.head > 1) {
        this.head--;
        this.tail--;
        this.sliceItem();
      } else {
        this.head = 0;
        this.tail = this.showNum;
        this.sliceItem();
      }
    }
  }

  navTo(item: number) {
    const offset = item - this.current;
    this.current = item;
    if (offset > 0) {
      this.tail = Math.min(this.totalPage, (+this.tail + +offset));
      this.head = this.tail - this.showNum;
      this.sliceItem();
    } else {
      this.head = Math.max(0, +this.head + +offset);
      this.tail = +this.head + +this.showNum;
      this.sliceItem();
    }
  }

  next() {
    if (this.current < this.totalPage) {
      this.current++;
      if (this.tail < this.totalPage) {
        this.head++;
        this.tail++;
        this.sliceItem();
      } else {
        this.tail = this.totalPage;
        this.head = this.tail - this.showNum;
        this.sliceItem();
      }

    }
  }

  sliceItem() {
    if (this.totalPage > this.showNum) {
      this.showItems = this.items.slice(this.head, this.tail);
    }
  }
}
