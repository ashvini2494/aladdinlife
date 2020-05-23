import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicecolorComponent } from './devicecolor.component';

describe('DevicecolorComponent', () => {
  let component: DevicecolorComponent;
  let fixture: ComponentFixture<DevicecolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicecolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicecolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
