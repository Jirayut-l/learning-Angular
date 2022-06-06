import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HomeLayoutRouting } from './home-layout.routing';
import { HomeLayoutComponent } from './layouts/home-layout';
import { CoreModule } from "../core/core.module";
import { InputOutputComponent, InputOutputModule } from "./components/input-output";
import { PipesDirectivesComponent, PipesDirectivesModule } from './components/pipes-directives';
import { StructureInjectionComponent, StructureInjectionModule } from './components/structure-injection';
import { EnrichComponentsComponent, EnrichComponentsModule } from './components/enrich-components';

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
