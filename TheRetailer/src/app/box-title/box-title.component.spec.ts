import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTitleComponent } from './box-title.component';

describe('BoxTitleComponent', () => {
  let component: BoxTitleComponent;
  let fixture: ComponentFixture<BoxTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
