import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallHeaderPanelComponent } from './small-header-panel.component';

describe('SmallHeaderPanelComponent', () => {
  let component: SmallHeaderPanelComponent;
  let fixture: ComponentFixture<SmallHeaderPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallHeaderPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallHeaderPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
