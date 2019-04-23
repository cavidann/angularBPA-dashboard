import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckObjComponent } from './check-obj.component';

describe('CheckObjComponent', () => {
  let component: CheckObjComponent;
  let fixture: ComponentFixture<CheckObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
