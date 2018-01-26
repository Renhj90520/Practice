import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-qa-item',
  templateUrl: './qa-item.component.html',
  styleUrls: ['./qa-item.component.css']
})
export class QaItemComponent implements OnInit {
  @Input() item;
  @ViewChild('toggle') toggle;
  expand = false;
  icon = 'fa-plus-circle'; // fa-times-circle
  constructor() { }

  ngOnInit() {
  }

}
