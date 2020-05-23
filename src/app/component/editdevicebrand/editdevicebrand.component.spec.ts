import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdevicebrandComponent } from './editdevicebrand.component';

describe('EditdevicebrandComponent', () => {
  let component: EditdevicebrandComponent;
  let fixture: ComponentFixture<EditdevicebrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdevicebrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdevicebrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
