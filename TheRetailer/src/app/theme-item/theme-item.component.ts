import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrls: ['./theme-item.component.css']
})
export class ThemeItemComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
