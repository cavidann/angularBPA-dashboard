import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Notifications } from 'src/app/interfaces/notifications';
import { notoficationsJSON } from 'src/app/static-datas/notifications';

@Component({
  selector: 'bpa-push-notifications',
  templateUrl: './push-notifications.component.html',
  styleUrls: ['./push-notifications.component.scss']
})
export class PushNotificationsComponent implements OnInit {

  activeUser = {
    name: 'Perviz'
  }

  addNotifcationForm: FormGroup;

  notifications: Notifications[] = notoficationsJSON;

  displayedColumns: string[] = ['user', 'createdAt', 'createdBy', 'modifiedAt', 'modifiedBy', 'actions'];
  dataSource = new MatTableDataSource<Notifications>(this.notifications);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  get user() {
    return this.addNotifcationForm.get('user');
  }

  get createdAt() {
    return this.addNotifcationForm.get('createdAt');
  }

  get createdBy() {
    return this.addNotifcationForm.get('createdBy');
  }

  get modifiedAt() {
    return this.addNotifcationForm.get('modifiedAt');
  }

  get modifiedBy() {
    return this.addNotifcationForm.get('modifiedBy');
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.addNotifcationForm = new FormGroup({
      user : new FormControl(null, Validators.required),
      createdAt: new FormControl(new Date(), Validators.required),
      createdBy: new FormControl(this.activeUser.name, Validators.required),
      modifiedAt: new FormControl(null),
      modifiedBy: new FormControl(null)
    });
  }

  addNotifcation(newData) {
    this.notifications.push(newData);
    this.dataSource = new MatTableDataSource<Notifications>(this.notifications);
    this.dataSource.paginator = this.paginator;
    
    return this.addNotifcationForm.get('user').reset()
    
    console.log(newData);
    
  }

  delete(element) {
    let index = this.notifications.indexOf(element);
    this.notifications.splice(index, 1);
    this.dataSource = new MatTableDataSource<Notifications>(this.notifications);
    this.dataSource.paginator = this.paginator;

    console.log(this.notifications);

  }

  edit(id) {
    this.router.navigate(['/notification-edit', id]);
  }

}
