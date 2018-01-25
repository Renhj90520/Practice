import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-title',
  templateUrl: './box-title.component.html',
  styleUrls: ['./box-title.component.css']
})
export class BoxTitleComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
