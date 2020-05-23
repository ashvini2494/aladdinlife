import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoperatorComponent } from './addoperator.component';

describe('AddoperatorComponent', () => {
  let component: AddoperatorComponent;
  let fixture: ComponentFixture<AddoperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
