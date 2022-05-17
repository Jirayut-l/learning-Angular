import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeLayoutRouting} from './home-layout.routing';
import {HomeLayoutComponent} from './layouts/home-layout';
import {RouterModule} from "@angular/router";
import {ComponentsModule} from "../../shared/components/components.module";
import  {InputOutputComponent} from "./components/input-output";
import {AliasingComponent} from "./pages/input-output/aliasing";
import  {SizerComponent} from "./pages/input-output/sizer";
import {ItemOutputComponent} from "./pages/input-output/item-output";
import {ItemDetailComponent} from "./pages/input-output/item-detail";
import  {InTheMetadataComponent} from "./pages/input-output/in-the-metadata";
import  {ItemInputOutputComponent} from "./pages/input-output/item-input-output";

@NgModule({
  declarations: [
    HomeLayoutComponent,
    InputOutputComponent,
    AliasingComponent,
    SizerComponent,
    ItemOutputComponent,
    ItemDetailComponent,
    InTheMetadataComponent,
    ItemInputOutputComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRouting),
    ComponentsModule
  ]
})
export class HomeModule {
}
