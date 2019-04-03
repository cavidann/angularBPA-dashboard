import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtpSettingsEditComponent } from './smtp-settings-edit.component';

describe('SmtpSettingsEditComponent', () => {
  let component: SmtpSettingsEditComponent;
  let fixture: ComponentFixture<SmtpSettingsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmtpSettingsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmtpSettingsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
