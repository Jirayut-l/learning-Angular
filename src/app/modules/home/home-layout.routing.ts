import { Routes } from "@angular/router";
import { HomeLayoutComponent } from "./layouts/home-layout";
import { InputOutputComponent } from "./components/input-output";
import { PipesDirectivesComponent } from "./components/pipes-directives"
import { StructureInjectionComponent } from './components/structure-injection';
import { EnrichComponentsComponent } from './components/enrich-components';

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
