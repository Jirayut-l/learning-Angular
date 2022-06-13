import { Routes } from '@angular/router';
import { AuthGuard, ConfirmGuard } from '@core/guards';
import { NavigateHeroDetailComponent } from '@home/pages/navigate-with-routing/navigate-hero-detail';
import { NavigateHeroListComponent } from '@home/pages/navigate-with-routing/navigate-hero-list';
import { EnrichHeroResolverService } from '@home/services/enrich-components';

export const NavigateWithRoutingRouting: Routes = [
  {
    path: 'heroes',
    component: NavigateHeroListComponent
  },
  {
    path: 'hero/:id',
    component: NavigateHeroDetailComponent,
    canActivate: [AuthGuard],
    canDeactivate: [ConfirmGuard],
    resolve: {
      hero: EnrichHeroResolverService
    }
  }
];
