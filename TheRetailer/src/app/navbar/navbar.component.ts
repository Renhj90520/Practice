import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('menu') menu;
  itemStates = [false, false, false, false, false];
  constructor() { }

  ngOnInit() {
    const menuItem = this.menu.nativeElement.children;
    for (let i = 0; i < menuItem.length; i++) {
      menuItem[i].children[1].style.width = this.menu.nativeElement.clientWidth + 'px';
      menuItem[i].onmouseenter = (event) => {
        for (let j = 0; j < this.itemStates.length; j++) {
          this.itemStates[j] = false;
        }
        this.itemStates[i] = true;
      };
    }
  }
}
