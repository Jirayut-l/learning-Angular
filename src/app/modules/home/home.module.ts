import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeLayoutRouting} from './home-layout.routing';
import {HomeLayoutComponent} from './layouts/home-layout';
import {RouterModule} from "@angular/router";
import { AliasingComponent } from './pages/input-output/aliasing';
import { InputOutputComponent } from './components/input-output';
import {ComponentsModule} from "../../shared/components/components.module";


@NgModule({
  declarations: [
    HomeLayoutComponent,
    AliasingComponent,
    InputOutputComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRouting),
    ComponentsModule
  ]
})
export class HomeModule {
}
