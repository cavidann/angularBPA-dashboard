import { Component, OnInit, ViewChild } from '@angular/core';
import { Scheduling } from 'src/app/interfaces/scheduling';
import { schedulingJSON } from 'src/app/static-datas/scheduling';

import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'bpa-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent implements OnInit {

  activeUser = {
    name: 'Perviz'
  }

  schedules: Scheduling[] = schedulingJSON;
  statusTpyes = [
    { type: "admin", color: "orange" },
    { type: "online", color: "red" },
    { type: "offline", color: "yellow" },
    { type: "targeted", color: "green" },
    { type: "not aviable", color: "grey" }
  ];
  addSchedulingForm: FormGroup;

  displayedColumns: string[] = ['start', 'end', 'status', 'createdAt', 'createdBy', 'actions'];
  dataSource = new MatTableDataSource<Scheduling>(this.schedules);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  get start() {
    return this.addSchedulingForm.get('start');
  }

  get end() {
    return this.addSchedulingForm.get('end');
  }

  get status() {
    return this.addSchedulingForm.get('status');
  }

  get createdAt() {
    return this.addSchedulingForm.get('createdAt');
  }

  get createdBy() {
    return this.addSchedulingForm.get('createdBy');
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.addSchedulingForm = new FormGroup({
      start : new FormControl(null, Validators.required),
      end : new FormControl(null, Validators.required),
      status : new FormControl(null, Validators.required),
      createdAt : new FormControl(new Date(), Validators.required),
      createdBy : new FormControl(this.activeUser.name, Validators.required),
      modifiedAt: new FormControl(null),
      modifiedBy: new FormControl(null)
    });
  }

  addScheduling(newData) {
    this.schedules.push(newData);
    this.dataSource = new MatTableDataSource<Scheduling>(this.schedules);
    this.dataSource.paginator = this.paginator;
    
    this.addSchedulingForm.get('start').reset()
    this.addSchedulingForm.get('end').reset()
    this.addSchedulingForm.get('status').reset()
    
    console.log(newData);
    
  }

  delete(element) {
    let index = this.schedules.indexOf(element);
    this.schedules.splice(index, 1);
    this.dataSource = new MatTableDataSource<Scheduling>(this.schedules);
    this.dataSource.paginator = this.paginator;

    console.log(this.schedules);

  }

  edit(id) {
    this.router.navigate(['/scheduling-edit', id]);
  }

}
