import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNotificationEditComponent } from './push-notification-edit.component';

describe('PushNotificationEditComponent', () => {
  let component: PushNotificationEditComponent;
  let fixture: ComponentFixture<PushNotificationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushNotificationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushNotificationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
