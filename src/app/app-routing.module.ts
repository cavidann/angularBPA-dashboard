import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './component/status/status.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SchedulingComponent } from './component/scheduling/scheduling.component';
import { SchedulingEditComponent } from './component/scheduling-edit/scheduling-edit.component';
import { UsersComponent } from './component/users/users.component';
import { UsersEditComponent } from './component/users-edit/users-edit.component';
import { SmtpSettingsComponent } from './component/smtp-settings/smtp-settings.component';
import { SmtpSettingsEditComponent } from './component/smtp-settings-edit/smtp-settings-edit.component';
import { FirebaseSettingsComponent } from './component/firebase-settings/firebase-settings.component';
import { FirebaseSettingsEditComponent } from './component/firebase-settings-edit/firebase-settings-edit.component';
import { SubscribersComponent } from './component/subscribers/subscribers.component';
import { PushNotificationEditComponent } from './component/push-notification-edit/push-notification-edit.component';
import { EmailEditComponent } from './component/email-edit/email-edit.component';
import { CmsComponent } from './component/cms/cms.component';
import { ContentEditComponent } from './component/content-edit/content-edit.component';
import { CheckObjComponent } from './component/check-obj/check-obj.component';
import { CheckObjEditComponent } from './component/check-obj-edit/check-obj-edit.component';
import { RulesComponent } from './component/rules/rules.component';
import { RulesEditComponent } from './component/rules-edit/rules-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user-edit/:id', component: UsersEditComponent },
  { path: 'status', component: StatusComponent },
  { path: 'scheduling', component: SchedulingComponent },
  { path: 'scheduling-edit/:id', component: SchedulingEditComponent },
  { path: 'smtp-settings', component: SmtpSettingsComponent },
  { path: 'smtp-settings-edit/:id', component: SmtpSettingsEditComponent },
  { path: 'firebase-settings', component: FirebaseSettingsComponent },
  { path: 'firebase-settings-edit/:id', component: FirebaseSettingsEditComponent },
  { path: 'subscribers', component: SubscribersComponent },
  { path: 'notification-edit/:id', component: PushNotificationEditComponent },
  { path: 'email-edit/:id', component: EmailEditComponent },
  { path: 'cms', component: CmsComponent },
  { path: 'content-edit/:id', component: ContentEditComponent },
  { path: 'check-obj', component: CheckObjComponent },
  { path: 'check-obj-edit/:id', component: CheckObjEditComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'rules-edit/:id', component: RulesEditComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
