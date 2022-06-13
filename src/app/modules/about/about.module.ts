import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutInfoComponent } from './components/about-info';

@NgModule({
  declarations: [AboutInfoComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule {
}
