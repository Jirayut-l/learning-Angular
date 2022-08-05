import { Routes } from "@angular/router";
import { AnimationsComponent } from '@home/components/animations';
import { EnrichComponentsComponent } from '@home/components/enrich-components';
import { InputOutputComponent } from "@home/components/input-output";
import { NavigateWithRoutingComponent } from '@home/components/navigate-with-routing';
import { OrchestratingValidationFormComponent } from '@home/components/orchestrating-validation-form';
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
            path: 'inputoutput',
            component: InputOutputComponent
          },
          {
            path: 'pipesdirectives',
            component: PipesDirectivesComponent
          },
          {
            path: 'structure-injection',
            component: StructureInjectionComponent
          },
          {
            path: 'enrich-components',
            component: EnrichComponentsComponent
          },
          {
            path: 'navigate-with-routing',
            component: NavigateWithRoutingComponent,
            loadChildren: () => import("./components/navigate-with-routing/navigate-with-routing.module")
              .then(p => p.NavigateWithRoutingModule)
          },
          {
            path: 'orchestrating-validation-form',
            component: OrchestratingValidationFormComponent
          },
          {
            path: 'animations',
            component: AnimationsComponent,
            loadChildren: () => import("./components/animations/animations.module")
              .then(p => p.AnimationsModule)
          }
        ]
      }
    ]
  }
];
