import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Emails } from 'src/app/interfaces/emails';
import { emailsJSON } from 'src/app/static-datas/emails';

@Component({
  selector: 'bpa-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {

  activeUser = {
    name: 'Perviz'
  }

  addEmailForm: FormGroup;

  emails: Emails[] = emailsJSON;

  displayedColumns: string[] = ['user', 'email', 'createdAt', 'createdBy', 'modifiedAt', 'modifiedBy', 'actions'];
  dataSource = new MatTableDataSource<Emails>(this.emails);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  get user() {
    return this.addEmailForm.get('user');
  }

  get email() {
    return this.addEmailForm.get('email');
  }

  get createdAt() {
    return this.addEmailForm.get('createdAt');
  }

  get createdBy() {
    return this.addEmailForm.get('createdBy');
  }

  get modifiedAt() {
    return this.addEmailForm.get('createdAt');
  }

  get modifiedBy() {
    return this.addEmailForm.get('createdBy');
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.addEmailForm = new FormGroup({
      user: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required]),
      createdAt: new FormControl(new Date()),
      createdBy: new FormControl(this.activeUser.name),
      modifiedAt: new FormControl(null),
      modifiedBy: new FormControl(null)
    });
  }

  addEmail(newData) {

    this.emails.push(newData);
    this.dataSource = new MatTableDataSource<Emails>(this.emails);
    this.dataSource.paginator = this.paginator;

    this.addEmailForm.get('user').reset();
    this.addEmailForm.get('email').reset();

    console.log(newData);

  }

  delete(element) {
    let index = this.emails.indexOf(element);
    this.emails.splice(index, 1);
    this.dataSource = new MatTableDataSource<Emails>(this.emails);
    this.dataSource.paginator = this.paginator;

    console.log(this.emails);

  }

  edit(id) {
    this.router.navigate(['/email-edit', id]);
  }

}
