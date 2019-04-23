import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckObj } from 'src/app/interfaces/check-obj';
import { checkObjJSON } from 'src/app/static-datas/check-obj';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'bpa-check-obj',
  templateUrl: './check-obj.component.html',
  styleUrls: ['./check-obj.component.scss']
})
export class CheckObjComponent implements OnInit {

  user = {
    name: 'Cavi'
  }

  checkObjs: CheckObj[] = checkObjJSON;

  addCheckObjForm: FormGroup;
  filterForm: FormGroup;
  checkTpyes = ['don`t check', 'check only allowed', 'check only blocked', 'check both']
  sourceTypes = ['header', 'user-agent', 'query', 'body', 'custom']

  displayedColumns: string[] = ['ip', 'checkType', 'isN.C.', 'source', 'createdAt', 'createdBy', 'modifiedAt', 'modifiedBy', 'actions'];
  dataSource = new MatTableDataSource<CheckObj>(this.checkObjs);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  get ip() {
    return this.addCheckObjForm.get('ip');
  }

  get checkType() {
    return this.addCheckObjForm.get('checkType');
  }

  get isNextCheckRequest() {
    return this.addCheckObjForm.get('isNextCheckRequest');
  }

  get source() {
    return this.addCheckObjForm.get('source');
  }

  get filterIp() {
    return this.filterForm.get('ip');
  }

  get filterCheckType() {
    return this.filterForm.get('checkType');
  }

  get filterSource() {
    return this.filterForm.get('source');
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.addCheckObjForm = new FormGroup({
      ip: new FormControl(null, Validators.required),
      checkType: new FormControl(null, Validators.required),
      isNextCheckRequest: new FormControl(false),
      source: new FormControl(null, Validators.required),
      createdAt: new FormControl(new Date(), Validators.required),
      createdBy: new FormControl(this.user.name, Validators.required),
      modifiedAt: new FormControl(null),
      modifiedBy: new FormControl(null)
    });

    this.filterForm = new FormGroup({
      ip: new FormControl(null),
      checkType: new FormControl(null),
      source: new FormControl(null)
    });
  }

  filter(filterOptions) {
    console.log(filterOptions);
    if (filterOptions.ip !== null && filterOptions.checkType === null && filterOptions.source === null) {
      // this.searchedNews = news.filter(function(item) {
      //   return JSON.stringify(item).toLowerCase().includes(filterOptions..toLocaleLowerCase());
      // });
      // this.dataSource = new MatTableDataSource<CheckObj>(this.checkObjs);
      // this.dataSource.paginator = this.paginator;
    } else if (filterOptions.ip === null && filterOptions.checkType !== null && filterOptions.source === null) {

    } else if (filterOptions.ip === null && filterOptions.checkType === null && filterOptions.source !== null) {

    } else if (filterOptions.ip !== null && filterOptions.checkType !== null && filterOptions.source === null) {

    } else if (filterOptions.ip !== null && filterOptions.checkType === null && filterOptions.source !== null) {

    } else if (filterOptions.ip === null && filterOptions.checkType !== null && filterOptions.source !== null) {

    } else if (filterOptions.ip !== null && filterOptions.checkType !== null && filterOptions.source !== null) {

    }

  }

  addCheckObj(newData) {
    this.checkObjs.push(newData);
    this.dataSource = new MatTableDataSource<CheckObj>(this.checkObjs);
    this.dataSource.paginator = this.paginator;
    console.log(newData);

    this.addCheckObjForm.get('ip').reset();
    this.addCheckObjForm.get('checkType').reset();
    this.addCheckObjForm.get('isNextCheckRequest').reset();
    this.addCheckObjForm.get('source').reset();
  }

  delete(element) {
    let index = this.checkObjs.indexOf(element);
    this.checkObjs.splice(index, 1);
    this.dataSource = new MatTableDataSource<CheckObj>(this.checkObjs);
    this.dataSource.paginator = this.paginator;

    console.log(this.checkObjs);

  }

  edit(id) {
    this.router.navigate(['/check-obj-edit', id]);
  }

}
