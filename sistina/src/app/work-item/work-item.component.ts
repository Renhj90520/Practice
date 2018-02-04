import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent implements OnInit {
  @Input() src;
  @Input() span;
  width: number;
  constructor() { }

  ngOnInit() {
    this.width = this.span * 193;
  }

}
