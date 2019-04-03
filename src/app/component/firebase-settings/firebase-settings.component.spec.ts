import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseSettingsComponent } from './firebase-settings.component';

describe('FirebaseSettingsComponent', () => {
  let component: FirebaseSettingsComponent;
  let fixture: ComponentFixture<FirebaseSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
