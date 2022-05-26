import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionallyComponent } from '../../pages/pipes-directives/conditionally/conditionally.component'
import { SwitchingTemplatesComponent } from '../../pages/pipes-directives/switching-templates/switching-templates.component';
import { PipesComponent } from '../../pages/pipes-directives/pipes/pipes.component';
import { AppModule } from '../../../../app.module';

@NgModule({
  declarations: [
    ConditionallyComponent,
    SwitchingTemplatesComponent,
    PipesComponent,
  ],
  exports: [
    ConditionallyComponent,
    SwitchingTemplatesComponent,
    PipesComponent,
  ],
  imports: [
    CommonModule,
    AppModule,
  ]
})
export class PipesDirectivesModule { }
