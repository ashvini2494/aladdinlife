import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdevicecolorComponent } from './editdevicecolor.component';

describe('EditdevicecolorComponent', () => {
  let component: EditdevicecolorComponent;
  let fixture: ComponentFixture<EditdevicecolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdevicecolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdevicecolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
