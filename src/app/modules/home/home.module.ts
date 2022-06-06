import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { EnrichComponentsComponent, EnrichComponentsModule } from './components/enrich-components';
import { InputOutputComponent, InputOutputModule } from "./components/input-output";
import { PipesDirectivesComponent, PipesDirectivesModule } from './components/pipes-directives';
import { StructureInjectionComponent, StructureInjectionModule } from './components/structure-injection';
import { HomeLayoutRouting } from './home-layout.routing';
import { HomeLayoutComponent } from './layouts/home-layout';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    InputOutputComponent,
    PipesDirectivesComponent,
    StructureInjectionComponent,
    EnrichComponentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(HomeLayoutRouting),
    CoreModule,
    InputOutputModule,
    PipesDirectivesModule,
    StructureInjectionModule,
    EnrichComponentsModule
  ]
})
export class HomeModule {
}
