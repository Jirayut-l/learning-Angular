import { Routes } from "@angular/router";
import { EnrichComponentsComponent } from '@home/components/enrich-components';
import { InputOutputComponent } from "@home/components/input-output";
import { PipesDirectivesComponent } from "@home/components/pipes-directives"
import { StructureInjectionComponent } from '@home/components/structure-injection';
import { HomeLayoutComponent } from "@home/layouts/home-layout";

export const HomeLayoutRouting: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'inputoutput', component: InputOutputComponent
          },
          {
            path: 'pipesdirectives', component: PipesDirectivesComponent
          },
          {
            path: 'structure-injection', component: StructureInjectionComponent
          },
          {
            path: 'enrich-components', component: EnrichComponentsComponent
          }
        ]
      }
    ]
  }
];
