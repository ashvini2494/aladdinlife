import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansmoduleComponent } from './plansmodule.component';

describe('PlansmoduleComponent', () => {
  let component: PlansmoduleComponent;
  let fixture: ComponentFixture<PlansmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
