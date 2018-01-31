import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-filter',
  templateUrl: './gallery-filter.component.html',
  styleUrls: ['./gallery-filter.component.css']
})
export class GalleryFilterComponent implements OnInit {
  items = ['Motion', 'Illustration', 'Web design', 'Print', 'All'];
  current = 0;
  constructor() { }

  ngOnInit() {
  }
  onactive(index) {
    this.current = index;
  }
}
