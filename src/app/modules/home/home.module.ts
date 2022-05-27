import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HomeLayoutRouting } from './home-layout.routing';
import { HomeLayoutComponent } from './layouts/home-layout';
import { CoreModule } from "../core/core.module";
import { InputOutputComponent } from "./components/input-output";
import { InputOutputModule } from "./components/input-output/input-output.module";
import { PipesDirectivesModule } from './components/pipes-directives/pipes-directives.module';
import { PipesDirectivesComponent } from './components/pipes-directives';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    InputOutputComponent,
    PipesDirectivesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(HomeLayoutRouting),
    CoreModule,
    InputOutputModule,
    PipesDirectivesModule,
  ]
})
export class HomeModule {
}
