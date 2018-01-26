import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';

@Component({
  selector: 'app-service-tab',
  templateUrl: './service-tab.component.html',
  styleUrls: ['./service-tab.component.css']
})
export class ServiceTabComponent implements OnInit {
  @ViewChild('menu') menu;
  @ViewChild('content') content;
  @HostBinding('class.clearfix') clear = true;
  states = [true, false, false, false, false];
  constructor() { }

  ngOnInit() {
    console.log(this.menu);
    const menuitems = this.menu.nativeElement.children;
    this.content.nativeElement.innerHTML = menuitems[0].children[2].innerHTML;
    for (let i = 0; i < menuitems.length; i++) {
      menuitems[i].onclick = () => {
        for (let j = 0; j < this.states.length; j++) {
          this.states[j] = false;
        }
        this.states[i] = true;
        this.content.nativeElement.innerHTML = menuitems[i].children[2].innerHTML;
      };
    }
  }

}
