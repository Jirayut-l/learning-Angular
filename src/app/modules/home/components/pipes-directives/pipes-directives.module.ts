import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppHighLightDirective } from '@shared/directives/app-high-light'
import { CopyrightDirective } from '@shared/directives/copyright';
import { NumericDirective } from '@shared/directives/numeric';
import { PermissionDirective } from '@shared/directives/permission';
import { ConditionallyComponent } from '@home/pages/pipes-directives/conditionally'
import { PipesComponent } from '@home/pages/pipes-directives/pipes';
import { SwitchingTemplatesComponent } from '@home/pages/pipes-directives/switching-templates';
import { SortPipe } from '@shared/pipes/sort';

@NgModule({
  declarations: [
    ConditionallyComponent,
    SwitchingTemplatesComponent,
    PipesComponent,
    SortPipe,
    AppHighLightDirective,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective
  ],
  exports: [
    ConditionallyComponent,
    SwitchingTemplatesComponent,
    PipesComponent,
    SortPipe,
    AppHighLightDirective,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PipesDirectivesModule {
}
