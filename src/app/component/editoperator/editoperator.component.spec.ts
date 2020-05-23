import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoperatorComponent } from './editoperator.component';

describe('EditoperatorComponent', () => {
  let component: EditoperatorComponent;
  let fixture: ComponentFixture<EditoperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
