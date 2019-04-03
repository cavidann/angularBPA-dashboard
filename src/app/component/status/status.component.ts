import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { projectJSON } from 'src/app/static-datas/projects';

import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'bpa-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  projects: Project[] = projectJSON;
  isSelected: boolean = false;
  statusTpyes = [
    { type: "admin", color: "orange" },
    { type: "online", color: "red" },
    { type: "offline", color: "yellow" },
    { type: "targeted", color: "green" },
    { type: "not aviable", color: "grey" }
  ];

  displayedColumns: string[] = ['name', 'status', 'currentStatus', 'actions'];
  dataSource = new MatTableDataSource<Project>(this.projects);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  save(id) {
    let status = document.getElementById('select-'+id)
    let selected= status.textContent;
    console.log(id+" "+selected);
  }

  restart(id) {
    console.log(id)
  }

  isActive(id){
    let status = document.getElementById('select-'+id)
    let selected= status.textContent;

    let saveBtn = document.getElementById('save-'+id) as HTMLButtonElement;

    if(selected) {
      this.isSelected = true;
      saveBtn.disabled = false;
    }

  }

}
