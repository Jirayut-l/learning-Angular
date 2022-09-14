import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimationsRoutingModule } from '@home/components/animations/animations-routing.module';
import { AboutAnimationComponent } from '@home/pages/animations/about-animation';
import { HomeAnimationComponent } from '@home/pages/animations/home-animation';
import { OpenCloseChildComponent } from '@home/pages/animations/open-close-child/open-close-child.component';
import { OpenClosePageComponent } from '@home/pages/animations/open-close-page';
import { OpenCloseComponent } from '@home/pages/animations/open-close/open-close.component';
import { StatusSliderComponent } from '@home/pages/animations/status-slider/status-slider.component';
import { ToggleAnimationPageComponent } from '@home/pages/animations/toggle-animation-page/toggle-animation-page.component';

@NgModule({
  declarations: [
    HomeAnimationComponent,
    AboutAnimationComponent,
    OpenCloseComponent,
    OpenClosePageComponent,
    OpenCloseChildComponent,
    OpenClosePageComponent,
    StatusSliderComponent,
    ToggleAnimationPageComponent,
  ],
  imports: [CommonModule, AnimationsRoutingModule],
})
export class AnimationsModule {}
