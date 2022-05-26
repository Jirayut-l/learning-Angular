import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HomeLayoutRouting } from './home-layout.routing';
import { HomeLayoutComponent } from './layouts/home-layout';
import { ComponentsModule } from "../../shared/components/components.module";
import { InputOutputComponent } from "./components/input-output";
import { InputOutputModule } from "./components/input-output/input-output.module";

@NgModule({
  declarations: [
    HomeLayoutComponent,
    InputOutputComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRouting),
    ComponentsModule,
    InputOutputModule,
    FormsModule,
  ]
})
export class HomeModule { }
