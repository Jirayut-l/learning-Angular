import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoreModule } from "@core/core.module";
import { EnrichComponentsComponent, EnrichComponentsModule } from '@home/components/enrich-components';
import { InputOutputComponent, InputOutputModule } from "@home/components/input-output";
import { PipesDirectivesComponent, PipesDirectivesModule } from '@home/components/pipes-directives';
import { StructureInjectionComponent, StructureInjectionModule } from '@home/components/structure-injection';
import { HomeLayoutRouting } from '@home/home-layout.routing';
import { HomeLayoutComponent } from '@home/layouts/home-layout';
import { NavigateWithRoutingComponent,NavigateWithRoutingModule } from '@home/components/navigate-with-routing';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    InputOutputComponent,
    PipesDirectivesComponent,
    StructureInjectionComponent,
    EnrichComponentsComponent,
    NavigateWithRoutingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(HomeLayoutRouting),
    CoreModule,
    InputOutputModule,
    PipesDirectivesModule,
    StructureInjectionModule,
    EnrichComponentsModule,
    NavigateWithRoutingModule
  ],
})
export class HomeModule {
}
