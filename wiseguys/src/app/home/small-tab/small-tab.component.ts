import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-tab',
  templateUrl: './small-tab.component.html',
  styleUrls: ['./small-tab.component.css']
})
export class SmallTabComponent implements OnInit {
  @Input() items;
  current = 0;
  constructor() { }

  ngOnInit() {
  }
  onactive(index) {
    this.current = index;
  }
}
