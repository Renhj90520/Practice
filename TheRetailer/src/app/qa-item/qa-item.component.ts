import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-qa-item',
  templateUrl: './qa-item.component.html',
  styleUrls: ['./qa-item.component.css']
})
export class QaItemComponent implements OnInit {
  @Input() item;
  expand = false;
  icon = 'fa-plus-circle'; // fa-times-circle
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  toggle() {
    console.log(this.el);
    this.expand = !this.expand;
    if (this.expand) {
      let height = 0;
      const children = this.el.nativeElement.children;
      for (let i = 0; i < children.length; i++) {
        height += children[i].clientHeight;
      }
      this.el.nativeElement.style.height = height + 'px';
      this.el.nativeElement.style.borderTop = '2px solid #000';
      this.el.nativeElement.style.borderBottom = '2px solid #000';
      this.icon = 'fa-times-circle';
    } else {
      this.el.nativeElement.style.height = '60px';
      this.el.nativeElement.style.borderTop = '1px solid #ccc';
      this.el.nativeElement.style.borderBottom = '1px solid #ccc';
      this.icon = 'fa-plus-circle';
    }
  }
}
