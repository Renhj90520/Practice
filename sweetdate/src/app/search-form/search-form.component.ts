import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  dropdown = [{ key: 0, value: 'Man' }, { key: 1, value: 'Woman' }];
  constructor() { }

  ngOnInit() {
  }

}
