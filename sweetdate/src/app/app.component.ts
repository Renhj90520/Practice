import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  members = [{
    title: '100% for FREE', text: 'You can register and create your profile for FREE! Lorem ipsum dolor sit amet,' +
      ' consectetur adipisicing elit, sed do eiusmod tempor.'
  }, {
    title: '100% for FREE', text: 'You can register and create your profile for FREE! Lorem ipsum dolor sit amet,' +
      ' consectetur adipisicing elit, sed do eiusmod tempor.'
  }, {
    title: '100% for FREE', text: 'You can register and create your profile for FREE! Lorem ipsum dolor sit amet,' +
      ' consectetur adipisicing elit, sed do eiusmod tempor.'
  }];

  texts = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt utlabore et dolore.',
    'Lorem ipsum dolor sit amet, consectetur.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing.'
  ];
}
