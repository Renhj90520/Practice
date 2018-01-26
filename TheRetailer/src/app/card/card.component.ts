import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() backcolor: string;
  @Input() withborder = false;
  @Input() title: string;
  @Input() text: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.background = this.backcolor;
  }

}
