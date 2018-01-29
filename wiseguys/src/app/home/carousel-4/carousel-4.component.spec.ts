import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel4Component } from './carousel-4.component';

describe('Carousel4Component', () => {
  let component: Carousel4Component;
  let fixture: ComponentFixture<Carousel4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carousel4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carousel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
