import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerDateComponent } from './corner-date.component';

describe('CornerDateComponent', () => {
  let component: CornerDateComponent;
  let fixture: ComponentFixture<CornerDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornerDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
