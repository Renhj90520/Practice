import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-abourus-item',
  templateUrl: './abourus-item.component.html',
  styleUrls: ['./abourus-item.component.css']
})
export class AbourusItemComponent implements OnInit {
  @Input() src: string;
  @Input() title: string;
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
