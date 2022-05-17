import {Routes} from "@angular/router";
import {HomeLayoutComponent} from "./layouts/home-layout";
import {InputOutputComponent} from "./components/input-output";

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
          }
        ]
      }
    ]
  }
];
