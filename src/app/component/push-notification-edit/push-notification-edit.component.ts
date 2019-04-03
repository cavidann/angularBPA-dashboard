import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Notifications } from 'src/app/interfaces/notifications';
import { notoficationsJSON } from 'src/app/static-datas/notifications';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bpa-push-notification-edit',
  templateUrl: './push-notification-edit.component.html',
  styleUrls: ['./push-notification-edit.component.scss']
})
export class PushNotificationEditComponent implements OnInit {

  id: string;
  editNotifcationForm: FormGroup;
  notifications: Notifications[] = notoficationsJSON;
  notification: any;
  // auditTpyes = [
  //   { type: 'ligth audit' },
  //   { type: 'audit' },
  //   { type: 'full audit' }
  // ]

  get user() {
    return this.editNotifcationForm.get('user');
  }

  get createdAt() {
    return this.editNotifcationForm.get('createdAt');
  }

  get createdBy() {
    return this.editNotifcationForm.get('createdBy');
  }

  get modifiedAt() {
    return this.editNotifcationForm.get('modifiedAt');
  }

  get modifiedBy() {
    return this.editNotifcationForm.get('modifiedBy');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'] || null;

    this.notification = this.getNotificationById(this.id);

    this.editNotifcationForm = new FormGroup({
      user : new FormControl(this.notification.user, Validators.required),
      createdAt: new FormControl(this.notification.createdAt, Validators.required),
      createdBy: new FormControl(this.notification.createdBy, Validators.required),
      modifiedAt: new FormControl(this.notification.modifiedAt, Validators.required),
      modifiedBy: new FormControl(this.notification.modifiedBy, Validators.required)
    });
  }

  getNotificationById(id) {
    return this.notifications.find(x => x.id === id);
  }

  editNotifcation(newData) {
    const edited = Object.assign({id: this.id}, newData)
    console.log(edited);    
    this.router.navigate(['/subscribers']);
  }

}
