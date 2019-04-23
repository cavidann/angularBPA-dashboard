import { Component, OnInit } from '@angular/core';
import { CheckObj } from 'src/app/interfaces/check-obj';
import { checkObjJSON } from 'src/app/static-datas/check-obj';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bpa-check-obj-edit',
  templateUrl: './check-obj-edit.component.html',
  styleUrls: ['./check-obj-edit.component.scss']
})
export class CheckObjEditComponent implements OnInit {

  activeUser = {
    name: 'Perviz'
  }

  id: string;
  checkObjs: CheckObj[] = checkObjJSON;
  checkObj: CheckObj;
  editCheckObjForm: FormGroup;

  checkTpyes = ['don`t check', 'check only allowed', 'check only blocked', 'check both']
  sourceTypes = ['header', 'user-agent', 'query', 'body', 'custom']

  get ip() {
    return this.editCheckObjForm.get('ip')
  }

  get checkType() {
    return this.editCheckObjForm.get('checkType')
  }

  get isNextCheckRequest() {
    return this.editCheckObjForm.get('isNextCheckRequest')
  }

  get source() {
    return this.editCheckObjForm.get('source')
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'] || null;

    this.checkObj = this.getCheckObjById(this.id);

    this.editCheckObjForm = new FormGroup({
      ip: new FormControl(this.checkObj.ip, Validators.required),
      checkType: new FormControl(this.checkObj.checkType, Validators.required),
      isNextCheckRequest: new FormControl(this.checkObj.checkType),
      source: new FormControl(this.checkObj.source, Validators.required),
      createdAt: new FormControl(this.checkObj.createdAt, Validators.required),
      createdBy: new FormControl(this.checkObj.createdBy, Validators.required),
      modifidAt: new FormControl(new Date(), Validators.required),
      modifidBy: new FormControl(this.activeUser.name, Validators.required)
    });
  }

  getCheckObjById(id) {
    return this.checkObjs.find(x => x.id === id);
  }

  editCheckObj(newData) {
    const edited = Object.assign({id: this.id}, newData)
    console.log(edited);    
    this.router.navigate(['/check-obj']);
  }

}
