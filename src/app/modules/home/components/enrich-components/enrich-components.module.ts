import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EnrichHeroListComponent } from '../../pages/enrich-components/enrich-hero-list';

@NgModule({
  declarations: [
    EnrichHeroListComponent
  ],
  exports: [
    EnrichHeroListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EnrichComponentsModule {
}
