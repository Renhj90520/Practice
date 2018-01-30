import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSlideComponent } from './small-slide.component';

describe('SmallSlideComponent', () => {
  let component: SmallSlideComponent;
  let fixture: ComponentFixture<SmallSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
