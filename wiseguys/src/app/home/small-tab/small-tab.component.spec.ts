import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTabComponent } from './small-tab.component';

describe('SmallTabComponent', () => {
  let component: SmallTabComponent;
  let fixture: ComponentFixture<SmallTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
