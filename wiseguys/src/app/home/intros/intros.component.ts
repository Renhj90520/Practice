import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-intros',
  templateUrl: './intros.component.html',
  styleUrls: ['./intros.component.css']
})
export class IntrosComponent implements OnInit {
  @Input() intros;
  constructor() { }

  ngOnInit() {
  }

}
