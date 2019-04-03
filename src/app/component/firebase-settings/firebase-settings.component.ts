import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { projectJSON } from 'src/app/static-datas/projects';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'bpa-firebase-settings',
  templateUrl: './firebase-settings.component.html',
  styleUrls: ['./firebase-settings.component.scss']
})
export class FirebaseSettingsComponent implements OnInit {

  projects: Project[] = projectJSON;

  displayedColumns: string[] = ['projects', 'actions'];
  dataSource = new MatTableDataSource<Project>(this.projects);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  edit(id) {
    this.router.navigate(['/firebase-settings-edit', id]);
  }

}
