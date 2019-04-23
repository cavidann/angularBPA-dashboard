import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckObjEditComponent } from './check-obj-edit.component';

describe('CheckObjEditComponent', () => {
  let component: CheckObjEditComponent;
  let fixture: ComponentFixture<CheckObjEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckObjEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckObjEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
