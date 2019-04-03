import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { smtpSettingsJSON } from 'src/app/static-datas/smtpSettings';
import { SmtpSettings } from 'src/app/interfaces/smtpSettings';

@Component({
  selector: 'bpa-smtp-settings-edit',
  templateUrl: './smtp-settings-edit.component.html',
  styleUrls: ['./smtp-settings-edit.component.scss']
})
export class SmtpSettingsEditComponent implements OnInit {

  id: string;
  smtpSettings: SmtpSettings[] = smtpSettingsJSON;
  smtpSetting: any;
  editSmtpSettingsForm: FormGroup;

  get username() {
    return this.editSmtpSettingsForm.get('username');
  }

  get email() {
    return this.editSmtpSettingsForm.get('email');
  }

  get password() {
    return this.editSmtpSettingsForm.get('password');
  }

  get host() {
    return this.editSmtpSettingsForm.get('host');
  }

  get port() {
    return this.editSmtpSettingsForm.get('port');
  }

  // get enableSsl() {
  //   return this.editSmtpSettingsForm.get('enableSsl');
  // }

  get timeout() {
    return this.editSmtpSettingsForm.get('timeout');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'] || null;
    
    // if(this.id){
      this.smtpSetting = this.getSmtpSettingById(this.id);
      console.log(this.smtpSetting)

      this.editSmtpSettingsForm = new FormGroup({
        username : new FormControl(this.smtpSetting.username, Validators.required),
        email : new FormControl(this.smtpSetting.email, [Validators.required, Validators.email]),
        password : new FormControl(this.smtpSetting.password, Validators.required),
        host : new FormControl(this.smtpSetting.host, Validators.required),
        port : new FormControl(this.smtpSetting.port, Validators.required),
        enableSsl : new FormControl(this.smtpSetting.enableSsl),
        timeout : new FormControl(this.smtpSetting.timeout, Validators.required)
      });
    // }
  }

  getSmtpSettingById(id) {
    return this.smtpSettings.find(x => x.id === id);
  }

  editSmtpSettings(newData) {
    const edited = Object.assign({id: this.id}, newData)
    console.log(edited);    
    this.router.navigate(['/smtp-settings']);
  }

}
