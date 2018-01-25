import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  @Input() item;
  @Input() isLeft = false;
  @HostBinding('class.clearfix') clear = true;

  constructor() { }

  ngOnInit() {
  }


}
