import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CopyrightDirective } from '@shared/directives/copyright';
import { NumericDirective } from '@shared/directives/numeric';
import { PermissionDirective } from '@shared/directives/permission';
import { SortPipe } from '@shared/pipes/sort';
import { AppHighLightDirective } from './directives/app-high-light';

@NgModule({
  declarations: [
    AppHighLightDirective,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
    SortPipe
  ],
  exports: [
    AppHighLightDirective,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
    SortPipe
  ],
  imports: [
    CommonModule
  ]
})
export class ShareModule {
}
