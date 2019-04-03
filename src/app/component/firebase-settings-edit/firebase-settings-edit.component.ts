import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { firebaseSettings } from 'src/app/interfaces/firebaseSettings';
import { firebaseSettingsJSON } from 'src/app/static-datas/firebaseSettings';

@Component({
  selector: 'bpa-firebase-settings-edit',
  templateUrl: './firebase-settings-edit.component.html',
  styleUrls: ['./firebase-settings-edit.component.scss']
})
export class FirebaseSettingsEditComponent implements OnInit {

  id: string;
  firebaseSettings: firebaseSettings[] = firebaseSettingsJSON;
  firebaseSetting: any;
  editFirebaseSettingsForm: FormGroup;

  get url() {
    return this.editFirebaseSettingsForm.get('url');
  }

  get authToken() {
    return this.editFirebaseSettingsForm.get('authToken');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'] || null;

    this.firebaseSetting = this.getFirebaseSettingById(this.id);

    this.editFirebaseSettingsForm = new FormGroup({
      url : new FormControl(this.firebaseSetting.url, Validators.required),
      authToken : new FormControl(this.firebaseSetting.authToken, Validators.required)
    });
  }

  getFirebaseSettingById(id) {
    return this.firebaseSettings.find(x => x.id === id);
  }

  editFirebaseSettings(newData) {
    const edited = Object.assign({id: this.id}, newData)
    console.log(edited);    
    this.router.navigate(['/firebase-settings']);
  }

}
