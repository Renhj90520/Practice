import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollHeaderComponent } from './scroll-header.component';

describe('ScrollHeaderComponent', () => {
  let component: ScrollHeaderComponent;
  let fixture: ComponentFixture<ScrollHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
