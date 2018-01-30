import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-header-panel',
  templateUrl: './small-header-panel.component.html',
  styleUrls: ['./small-header-panel.component.css']
})
export class SmallHeaderPanelComponent implements OnInit {
  @Input() title;
  constructor() { }

  ngOnInit() {
  }

}
