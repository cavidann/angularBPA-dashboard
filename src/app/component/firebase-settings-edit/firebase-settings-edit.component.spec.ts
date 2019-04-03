import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseSettingsEditComponent } from './firebase-settings-edit.component';

describe('FirebaseSettingsEditComponent', () => {
  let component: FirebaseSettingsEditComponent;
  let fixture: ComponentFixture<FirebaseSettingsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseSettingsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseSettingsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
