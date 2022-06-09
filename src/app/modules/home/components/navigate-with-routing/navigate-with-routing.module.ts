import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigateWithRoutingRouting } from '@home/components/navigate-with-routing/navigate-with-routing.routing';
import {NavigateHeroListComponent} from '@home/pages/navigate-with-routing/navigate-hero-list';
import {NavigateHeroDetailComponent} from '@home/pages/navigate-with-routing/navigate-hero-detail';

@NgModule({
  declarations: [
    NavigateHeroListComponent,
    NavigateHeroDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(NavigateWithRoutingRouting),
  ]
})
export class NavigateWithRoutingModule {
}
