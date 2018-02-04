import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products = [{
    src: 'assets/images/prod1.jpg',
    name: 'Red & Blue bag',
    price: '370.00',
    rate: 3
  }, {
    src: 'assets/images/prod1.jpg',
    name: 'Red & Blue bag',
    price: '370.00',
    rate: 3
  }, {
    src: 'assets/images/prod1.jpg',
    name: 'Red & Blue bag',
    price: '370.00',
    rate: 3
  }, {
    src: 'assets/images/prod1.jpg',
    name: 'Red & Blue bag',
    price: '370.00',
    rate: 3
  }, {
    src: 'assets/images/prod1.jpg',
    name: 'Red & Blue bag',
    price: '370.00',
    rate: 3
  }, {
    src: 'assets/images/prod1.jpg',
    name: 'Red & Blue bag',
    price: '370.00',
    rate: 3
  }, {
    src: 'assets/images/prod1.jpg',
    name: 'Red & Blue bag',
    price: '370.00',
    rate: 3
  }, {
    src: 'assets/images/prod1.jpg',
    name: 'Red & Blue bag',
    price: '370.00',
    rate: 3
  }];
  srcs = [];
  ngOnInit() {
    for (let i = 1; i < 10; i++) {
      this.srcs.push('../assets/images/pic0' + i + '.png');
    }
  }
}
