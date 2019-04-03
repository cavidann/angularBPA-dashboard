import { Component, OnInit } from '@angular/core';
import { Scheduling } from 'src/app/interfaces/scheduling';
import { schedulingJSON } from 'src/app/static-datas/scheduling';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bpa-scheduling-edit',
  templateUrl: './scheduling-edit.component.html',
  styleUrls: ['./scheduling-edit.component.scss']
})
export class SchedulingEditComponent implements OnInit {

  schedules: Scheduling[] = schedulingJSON;
  schedule: any;
  statusTpyes = [
    { type: "admin", color: "orange" },
    { type: "online", color: "red" },
    { type: "offline", color: "yellow" },
    { type: "targeted", color: "green" },
    { type: "not aviable", color: "grey" }
  ];
  editSchedulingForm: FormGroup;
  id:any;

  get start() {
    return this.editSchedulingForm.get('start');
  }

  get end() {
    return this.editSchedulingForm.get('end');
  }

  get status() {
    return this.editSchedulingForm.get('status');
  }

  get createdAt() {
    return this.editSchedulingForm.get('createdAt');
  }

  get createdBy() {
    return this.editSchedulingForm.get('createdBy');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'] || null;

    if(this.id){
      this.schedule = this.getScheduleById(this.id);
      this.editSchedulingForm = new FormGroup({
        start : new FormControl(this.schedule.start, Validators.required),
        end : new FormControl(this.schedule.end, Validators.required),
        status : new FormControl(this.schedule.status, Validators.required),
        createdAt : new FormControl(this.schedule.createdAt, Validators.required),
        createdBy : new FormControl(this.schedule.createdBy, Validators.required)
      });
    }
  }

  getScheduleById(id) {
    return this.schedules.find(x => x.id === id);
  }

  editScheduling(newData) {
    const edited = Object.assign({id: this.id}, newData)
    console.log(edited);    
    this.router.navigate(['/scheduling']);
  }

}
