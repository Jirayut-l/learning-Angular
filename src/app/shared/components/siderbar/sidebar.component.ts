import {Component, OnInit} from '@angular/core';
import {RouteInfo} from "../../models/RouteInfo";

export const ROUTES: RouteInfo[] = [
  {
    path: '/inputoutput',
    title: 'InputOutput',
    icon: '',
    class: ''
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.menuItems = ROUTES;
  }

}