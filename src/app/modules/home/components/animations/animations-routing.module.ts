import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAnimationComponent } from '@home/pages/animations/about-animation/about-animation.component';
import { HomeAnimationComponent } from '@home/pages/animations/home-animation';
import { OpenClosePageComponent } from '@home/pages/animations/open-close-page';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/animations/homeanimation' },
  {
    path: 'homeanimation',
    component: HomeAnimationComponent,
    data: { animation: 'HomeAnimationPage' }
  },
  {
    path: 'aboutanimation',
    component: AboutAnimationComponent,
    data: { animation: 'AboutAnimationPage' }
  },
  {
    path: 'open-close',
    component: OpenClosePageComponent,
    data: { animation: 'OpenClosePage' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule {
}
