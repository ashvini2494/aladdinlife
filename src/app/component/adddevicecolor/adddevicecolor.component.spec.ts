import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddevicecolorComponent } from './adddevicecolor.component';

describe('AdddevicecolorComponent', () => {
  let component: AdddevicecolorComponent;
  let fixture: ComponentFixture<AdddevicecolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddevicecolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddevicecolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
