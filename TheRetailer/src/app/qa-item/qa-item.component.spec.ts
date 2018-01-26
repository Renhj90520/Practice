import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaItemComponent } from './qa-item.component';

describe('QaItemComponent', () => {
  let component: QaItemComponent;
  let fixture: ComponentFixture<QaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
