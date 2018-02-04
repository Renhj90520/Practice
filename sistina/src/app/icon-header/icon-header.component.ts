import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-header',
  templateUrl: './icon-header.component.html',
  styleUrls: ['./icon-header.component.css']
})
export class IconHeaderComponent implements OnInit {
  @Input() icon;
  @Input() title;
  constructor() { }

  ngOnInit() {
  }

}
