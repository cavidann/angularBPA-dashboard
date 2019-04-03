import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingEditComponent } from './scheduling-edit.component';

describe('SchedulingEditComponent', () => {
  let component: SchedulingEditComponent;
  let fixture: ComponentFixture<SchedulingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
