import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeLayoutRouting} from './home-layout.routing';
import {HomeLayoutComponent} from './layouts/home-layout';
import {RouterModule} from "@angular/router";
import { AliasingComponent } from './pages/input-output/aliasing';
import { InputOutputComponent } from './components/input-output';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    AliasingComponent,
    InputOutputComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRouting)
  ]
})
export class HomeModule {
}
