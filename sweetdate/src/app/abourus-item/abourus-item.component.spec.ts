import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbourusItemComponent } from './abourus-item.component';

describe('AbourusItemComponent', () => {
  let component: AbourusItemComponent;
  let fixture: ComponentFixture<AbourusItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbourusItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbourusItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
