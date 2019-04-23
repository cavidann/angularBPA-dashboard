import { Component, OnInit, ViewChild } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { usersJSON } from 'src/app/static-datas/users';

import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'bpa-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Users[] = usersJSON;
  addUserForm: FormGroup;
  blockedTpyes = [true, false];
  permissionTypes = [
    {
      value: 'users',
      children: []
    },
    {
      value: 'status managment',
      children: [
        {value: 'status'},
        {value: 'scheduling'},
        {value:'check-obj'},
        {value:'rules'},
        {value:'CMS'},
        {value:'logs'}
      ]
    },
    {
      value: 'control managment',
      children: [
        {value: 'card balance'},
        {value: 'sim cards'},
        {value:'configs'}
      ]
    },
    {
      value: 'notification',
      children: [
        {value: 'SMTP settings'},
        {value: 'firebase settings'},
        {value: 'subscribers'}
      ]
    },
    {
      value: 'settings',
      children: []
    }
  ]

  displayedColumns: string[] = ['user', 'blocked', 'permissions', 'actions'];
  dataSource = new MatTableDataSource<Users>(this.users);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  get name() {
    return this.addUserForm.get('name');
  }

  get surname() {
    return this.addUserForm.get('surname');
  }

  get blocked() {
    return this.addUserForm.get('blocked');
  }

  get permissions() {
    return this.addUserForm.get('permissions');
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.addUserForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      blocked: new FormControl(null, Validators.required),
      permissions: new FormControl(null, Validators.required)
    });
  }

  isSingle(txt) {
    return txt.includes('single - ')
  }

  isStatus(txt) {
    return txt.includes('status managment - ')
  } 

  isControl(txt) {
    return txt.includes('control managment - ')
  }

  isNotification(txt) {
    return txt.includes('notification - ')
  } 

  addUser(newData) {
    
    let single = newData.permissions.filter(function(item) {
      return JSON.stringify(item).toLocaleLowerCase().includes('single - ')
    })
    // .map(v => v.slice(9))

    let statusManagment= newData.permissions.filter(function (item){
      return JSON.stringify(item).toLocaleLowerCase().includes('status managment - ')
    })
    // .map(v => v.slice(19))

    let controlManagment= newData.permissions.filter(function (item){
      return JSON.stringify(item).toLocaleLowerCase().includes('control managment - ')
    })
    // .map(v => v.slice(20))

    let notification = newData.permissions.filter(function(item) {
      return JSON.stringify(item).toLocaleLowerCase().includes('notification - ')
    })

    console.log(newData);


    newData.permissions = single.concat(statusManagment).concat(controlManagment).concat(notification);

    console.log(newData);
    

    this.users.push(newData);
    this.dataSource = new MatTableDataSource<Users>(this.users);
    this.dataSource.paginator = this.paginator;
    
    this.addUserForm.reset()
  }

  delete(element) {
    let index = this.users.indexOf(element);
    this.users.splice(index, 1);
    this.dataSource = new MatTableDataSource<Users>(this.users);
    this.dataSource.paginator = this.paginator;

    console.log(this.users);

  }

  edit(id) {
    this.router.navigate(['/user-edit', id]);
  }

}
