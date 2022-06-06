import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppHighLightDirective } from '../../../../shared/directives/app-high-light/app-high-light.directive'
import { CopyrightDirective } from '../../../../shared/directives/copyright/copyright.directive';
import { NumericDirective } from '../../../../shared/directives/numeric/numeric.directive';
import { PermissionDirective } from '../../../../shared/directives/permission/permission.directive';
import { SortPipe } from '../../../../shared/pipes/sort/sort.pipe';
import { ConditionallyComponent } from '../../pages/pipes-directives/conditionally/conditionally.component'
import { PipesComponent } from '../../pages/pipes-directives/pipes/pipes.component';
import {
  SwitchingTemplatesComponent
} from '../../pages/pipes-directives/switching-templates/switching-templates.component';

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
