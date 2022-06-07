import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnrichHeroListComponent } from '@home/pages/enrich-components/enrich-hero-list';

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
