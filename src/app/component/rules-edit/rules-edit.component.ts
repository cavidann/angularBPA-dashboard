import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Rules } from 'src/app/interfaces/rules';
import { rulesJSON } from 'src/app/static-datas/rules';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bpa-rules-edit',
  templateUrl: './rules-edit.component.html',
  styleUrls: ['./rules-edit.component.scss']
})
export class RulesEditComponent implements OnInit {

  activeUser = {
    name: 'Perviz'
  }

  id: string;
  rules: Rules[] = rulesJSON;
  rule: Rules;
  editRulesForm: FormGroup;

  actionTypes = ['go Online', 'go Offline', 'ignore']
  functionTypes = [
    'equals',
    'not equal',
    'contains',
    'does not contain',
    'starts with',
    'does not start with',
    'ends with',
    'does not end with',
    'matches regex',
    'does not match regex',
    'less than',
    'greater than'
  ]

  get ip() {
    return this.editRulesForm.get('ip');
  }

  get value() {
    return this.editRulesForm.get('value');
  }

  get params() {
    return this.editRulesForm.get('params');
  }

  get info() {
    return this.editRulesForm.get('info');
  }
  
  get function() {
    return this.editRulesForm.get('function');
  }
  
  get actionType() {
    return this.editRulesForm.get('actionType');
  }

  get alert() {
    return this.editRulesForm.get('alert');
  }

  get status() {
    return this.editRulesForm.get('status');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'] || null;

    this.rule = this.getRuleById(this.id);
    
    this.editRulesForm = new FormGroup({
      ip: new FormControl(this.rule.id, Validators.required),
      value: new FormControl(this.rule.value, Validators.required),
      params: new FormControl(this.rule.params, Validators.required),
      info: new FormControl(this.rule.info, Validators.required),
      function: new FormControl(this.rule.function, Validators.required),
      actionType: new FormControl(this.rule.actionType, Validators.required),
      alert: new FormControl(this.rule.alert, Validators.required),
      status: new FormControl(this.rule.status, Validators.required),
      createdAt: new FormControl(this.rule.createdAt, Validators.required),
      createdBy: new FormControl(this.rule.createdBy, Validators.required),
      modifiedAt: new FormControl(new Date(), Validators.required),
      modifiedBy: new FormControl(this.activeUser.name, Validators.required)
    })
  }

  getRuleById(id) {
    return this.rules.find(x => x.id === id);
  }

  editRules(newData) {
    const edited = Object.assign({id: this.id}, newData)
    console.log(edited);    
    this.router.navigate(['/rules']);
  }

}
