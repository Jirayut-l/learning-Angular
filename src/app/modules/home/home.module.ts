import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeLayoutRouting} from './home-layout.routing';
import {HomeLayoutComponent} from './layouts/home-layout';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRouting)
  ]
})
export class HomeModule {
}
