import { Routes } from '@angular/router';
import { NavigateHeroDetailComponent } from '@home/pages/navigate-with-routing/navigate-hero-detail';
import { NavigateHeroListComponent } from '@home/pages/navigate-with-routing/navigate-hero-list';

export const NavigateWithRoutingRouting: Routes = [
  {
    path: 'heroes', component: NavigateHeroListComponent
  },
  {
    path: 'hero/:id', component: NavigateHeroDetailComponent
  }
];
