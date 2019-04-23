import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Rules } from 'src/app/interfaces/rules';
import { rulesJSON } from 'src/app/static-datas/rules';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'bpa-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  user = {
    name: 'Cavi'
  }

  rules: Rules[] = rulesJSON;
  addRulesForm: FormGroup;

  actionTypes = ['go Online', 'go Offline', 'ignore']
  functionTypes = [
    'Equals',
    'Not equal',
    'Contains',
    'Does not contain',
    'Starts with',
    'Does not start with',
    'Ends with',
    'Does not end with',
    'Matches regex',
    'Does not match regex',
    'Less than',
    'Greater than'
  ]

  displayedColumns: string[] = ['ip', 'value', 'params', 'info', 'function', 'actionType', 'alert', 'status', 'createdBy', 'modifiedAt', 'modifiedBy', 'actions'];
  dataSource = new MatTableDataSource<Rules>(this.rules);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  get ip() {
    return this.addRulesForm.get('ip');
  }

  get value() {
    return this.addRulesForm.get('value');
  }

  get params() {
    return this.addRulesForm.get('params');
  }

  get info() {
    return this.addRulesForm.get('info');
  }
  
  get function() {
    return this.addRulesForm.get('function');
  }
  
  get actionType() {
    return this.addRulesForm.get('actionType');
  }

  get alert() {
    return this.addRulesForm.get('alert');
  }

  get status() {
    return this.addRulesForm.get('status');
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.addRulesForm = new FormGroup({
      ip: new FormControl(null, Validators.required),
      value: new FormControl(null, Validators.required),
      params: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
      function: new FormControl(null, Validators.required),
      actionType: new FormControl(null, Validators.required),
      alert: new FormControl(false, Validators.required),
      status: new FormControl(false, Validators.required),
      createdAt: new FormControl(new Date(), Validators.required),
      createdBy: new FormControl(this.user.name, Validators.required),
      modifiedAt: new FormControl(null),
      modifiedBy: new FormControl(null)
    })
    
  }

  addRules(newData) {
    this.rules.push(newData);
    this.dataSource = new MatTableDataSource<Rules>(this.rules);
    this.dataSource.paginator = this.paginator;
    console.log(newData);

    this.addRulesForm.get('ip').reset();
    this.addRulesForm.get('value').reset();
    this.addRulesForm.get('params').reset();
    this.addRulesForm.get('info').reset();
    this.addRulesForm.get('function').reset();
    this.addRulesForm.get('actionType').reset();
    this.addRulesForm.get('alert').reset();
    this.addRulesForm.get('status').reset();
  }

  delete(element) {
    let index = this.rules.indexOf(element);
    this.rules.splice(index, 1);
    this.dataSource = new MatTableDataSource<Rules>(this.rules);
    this.dataSource.paginator = this.paginator;

    console.log(this.rules);

  }

  edit(id) {
    this.router.navigate(['/rules-edit', id]);
  }

}
