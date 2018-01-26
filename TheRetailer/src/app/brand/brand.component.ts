import { Component, OnInit, Input, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  @Input() withSign = false;
  @Input() signText: string;
  @Input() main: string;
  @Input() second: string;
  @Input() width;
  @Input() height;
  @Input() backColor: string;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.width = (this.width - 24) + 'px';
    this.el.nativeElement.style.height = (this.height - 24) + 'px';
    this.el.nativeElement.style.backgroundColor = this.backColor;
  }

}
