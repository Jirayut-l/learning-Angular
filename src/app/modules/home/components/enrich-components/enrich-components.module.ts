import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnrichHeroListComponent } from '@home/pages/enrich-components/enrich-hero-list';
import { KeyLoggerComponent } from '@home/pages/enrich-components/key-logger/key-logger.component';

@NgModule({
  declarations: [
    EnrichHeroListComponent,
    KeyLoggerComponent
  ],
  exports: [
    EnrichHeroListComponent,
    KeyLoggerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EnrichComponentsModule {
}
