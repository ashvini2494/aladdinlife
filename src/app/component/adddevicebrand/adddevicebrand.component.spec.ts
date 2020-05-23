import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddevicebrandComponent } from './adddevicebrand.component';

describe('AdddevicebrandComponent', () => {
  let component: AdddevicebrandComponent;
  let fixture: ComponentFixture<AdddevicebrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddevicebrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddevicebrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
