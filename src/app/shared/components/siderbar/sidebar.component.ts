import {Component, OnInit} from '@angular/core';
import {RouteInfo} from "../../models/RouteInfo";

export const ROUTES: RouteInfo[] = [
  {
    path: '/inputoutput',
    title: 'InputOutput',
    icon: 'bi bi-input-cursor',
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

  public ngOnInit(): void {
    this.menuItems = ROUTES;
  }
}
