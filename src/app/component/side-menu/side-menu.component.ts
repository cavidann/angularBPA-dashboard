import { Component, OnInit } from '@angular/core';
import { sideMenuJSON } from 'src/app/static-datas/side-menu';

@Component({
  selector: 'bpa-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  menus: Array<any> = sideMenuJSON;

  constructor() { }

  ngOnInit() {
  }

}
