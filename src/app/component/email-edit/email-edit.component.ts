import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Emails } from 'src/app/interfaces/emails';
import { emailsJSON } from 'src/app/static-datas/emails';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bpa-email-edit',
  templateUrl: './email-edit.component.html',
  styleUrls: ['./email-edit.component.scss']
})
export class EmailEditComponent implements OnInit {

  activeUser = {
    name: 'Perviz'
  }

  id: any;
  editEmailForm: FormGroup;
  emails: Emails[] = emailsJSON;
  emailItem: any;

  get user() {
    return this.editEmailForm.get('user');
  }

  get email() {
    return this.editEmailForm.get('email');
  }

  get createdAt() {
    return this.editEmailForm.get('createdAt');
  }

  get createdBy() {
    return this.editEmailForm.get('createdBy');
  }

  get modifiedAt() {
    return this.editEmailForm.get('modifiedAt');
  }

  get modifiedBy() {
    return this.editEmailForm.get('modifiedBy');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'] || null;

    this.emailItem = this.getEmailById(this.id);

    this.editEmailForm = new FormGroup({
      user : new FormControl(this.emailItem.user),
      email : new FormControl(this.emailItem.email, Validators.email),
      createdAt: new FormControl(this.emailItem.createdAt, Validators.required),
      createdBy: new FormControl(this.emailItem.createdBy, Validators.required),
      modifiedAt: new FormControl(new Date(), Validators.required),
      modifiedBy: new FormControl(this.activeUser.name, Validators.required)
    });
  }

  getEmailById(id) {
    return this.emails.find(x => x.id === id);
  }

  editEmail(newData) {
    const edited = Object.assign({id: this.id}, newData)
    console.log(edited);    
    this.router.navigate(['/subscribers']);
  }

}
