import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeLayoutRouting} from './home-layout.routing';
import {HomeLayoutComponent} from './layouts/home-layout';
import {RouterModule} from "@angular/router";
import {ComponentsModule} from "../../shared/components/components.module";
import  {InputOutputComponent} from "./components/input-output";
import {AliasingComponent} from "./pages/input-output/aliasing";


@NgModule({
  declarations: [
    HomeLayoutComponent,
    InputOutputComponent,
    AliasingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRouting),
    ComponentsModule
  ]
})
export class HomeModule {
}
