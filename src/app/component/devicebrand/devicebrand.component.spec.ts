import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicebrandComponent } from './devicebrand.component';

describe('DevicebrandComponent', () => {
  let component: DevicebrandComponent;
  let fixture: ComponentFixture<DevicebrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicebrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicebrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
