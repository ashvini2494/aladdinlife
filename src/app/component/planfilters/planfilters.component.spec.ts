import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanfiltersComponent } from './planfilters.component';

describe('PlanfiltersComponent', () => {
  let component: PlanfiltersComponent;
  let fixture: ComponentFixture<PlanfiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanfiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
