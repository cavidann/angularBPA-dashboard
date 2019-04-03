import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './component/top-menu/top-menu.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { StatusComponent } from './component/status/status.component';
import { SchedulingComponent } from './component/scheduling/scheduling.component';
import { MatNativeDateModule } from '@angular/material';
import { SchedulingEditComponent } from './component/scheduling-edit/scheduling-edit.component';
import { UsersComponent } from './component/users/users.component';
import { UsersEditComponent } from './component/users-edit/users-edit.component';
import { ReportsComponent } from './component/reports/reports.component';
import { SmtpSettingsComponent } from './component/smtp-settings/smtp-settings.component';
import { SmtpSettingsEditComponent } from './component/smtp-settings-edit/smtp-settings-edit.component';
import { FirebaseSettingsComponent } from './component/firebase-settings/firebase-settings.component';
import { FirebaseSettingsEditComponent } from './component/firebase-settings-edit/firebase-settings-edit.component';
import { SubscribersComponent } from './component/subscribers/subscribers.component';
import { EmailsComponent } from './component/emails/emails.component';
import { PushNotificationsComponent } from './component/push-notifications/push-notifications.component';
import { PushNotificationEditComponent } from './component/push-notification-edit/push-notification-edit.component';
import { EmailEditComponent } from './component/email-edit/email-edit.component';
import { CmsComponent } from './component/cms/cms.component';
import { EscapeHtmlPipe } from './pipes/escape-html.pipe';
import { ContentEditComponent } from './component/content-edit/content-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideMenuComponent,
    StatusComponent,
    DashboardComponent,
    SchedulingComponent,
    SchedulingEditComponent,
    UsersComponent,
    UsersEditComponent,
    ReportsComponent,
    SmtpSettingsComponent,
    SmtpSettingsEditComponent,
    FirebaseSettingsComponent,
    FirebaseSettingsEditComponent,
    SubscribersComponent,
    EmailsComponent,
    PushNotificationsComponent,
    PushNotificationEditComponent,
    EmailEditComponent,
    CmsComponent,
    EscapeHtmlPipe,
    ContentEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule    
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
