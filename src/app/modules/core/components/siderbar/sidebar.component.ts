import { Component, OnInit } from '@angular/core';
import { RouteInfo } from "@shared/models/RouteInfo";

export const ROUTES: RouteInfo[] = [
  {
    path: '/inputoutput',
    title: 'InputOutput',
    icon: 'bi bi-input-cursor',
    class: ''
  },
  {
    path: '/pipesdirectives',
    title: 'PipesDirectives',
    icon: 'bi bi-input-cursor',
    class: ''
  },
  {
    path: '/structure-injection',
    title: 'Structure-Injection',
    icon: 'bi bi-input-cursor',
    class: ''
  },
  {
    path: '/enrich-components',
    title: 'Enrich Components with Async',
    icon: 'bi bi-input-cursor',
    class: ''
  },
  {
    path: '/navigate-with-routing',
    title: 'Navigate With Routing',
    icon: 'bi bi-input-cursor',
    class: ''
  },
  {
    path: '/orchestrating-validation-form',
    title: 'Orchestrating Validation in Forms',
    icon: 'bi bi-input-cursor',
    class: ''
  }
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
