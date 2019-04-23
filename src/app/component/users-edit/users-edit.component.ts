import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Users } from 'src/app/interfaces/users';
import { usersJSON } from 'src/app/static-datas/users';

@Component({
  selector: 'bpa-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

  users: Users[] = usersJSON;
  user: any;

  id: any;
  editUserForm: FormGroup;

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
        {value:'rules'},
        {value:'check-obj'},
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

  get name() {
    return this.editUserForm.get('name');
  }

  get surname() {
    return this.editUserForm.get('surname');
  }

  get blocked() {
    return this.editUserForm.get('blocked');
  }

  get permissions() {
    return this.editUserForm.get('permissions');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'] || null;
    
    if(this.id) {
      this.user = this.getScheduleById(this.id);
      this.editUserForm = new FormGroup({
        name: new FormControl(this.user.name, Validators.required),
        surname: new FormControl(this.user.surname, Validators.required),
        blocked: new FormControl(this.user.blocked, Validators.required),
        permissions: new FormControl(this.user.permissions, Validators.required)
      });
    }
  }

  getScheduleById(id) {
    return this.users.find(x => x.id === id);
  }

  editUser(newData) {
    const edited = Object.assign({id: this.id}, newData)
    console.log(edited);    
    this.router.navigate(['/users']);
  }
  

}
