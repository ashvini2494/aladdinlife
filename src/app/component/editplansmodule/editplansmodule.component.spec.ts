import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditplansmoduleComponent } from './editplansmodule.component';

describe('EditplansmoduleComponent', () => {
  let component: EditplansmoduleComponent;
  let fixture: ComponentFixture<EditplansmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditplansmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditplansmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
