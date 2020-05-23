import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplansmoduleComponent } from './addplansmodule.component';

describe('AddplansmoduleComponent', () => {
  let component: AddplansmoduleComponent;
  let fixture: ComponentFixture<AddplansmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplansmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplansmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
