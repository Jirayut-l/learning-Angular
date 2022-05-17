import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeLayoutRouting} from './home-layout.routing';
import {HomeLayoutComponent} from './layouts/home-layout';
import {RouterModule} from "@angular/router";
import {ComponentsModule} from "../../shared/components/components.module";
import  {InputOutputComponent} from "./components/input-output";
import {InputOutputModule} from "./components/input-output/input-output.module";


@NgModule({
  declarations: [
    HomeLayoutComponent,
    InputOutputComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRouting),
    ComponentsModule,
    InputOutputModule
  ]
})
export class HomeModule {
}
