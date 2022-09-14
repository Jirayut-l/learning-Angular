import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CopyrightDirective } from '@shared/directives/copyright';
import { NumericDirective } from '@shared/directives/numeric';
import { PermissionDirective } from '@shared/directives/permission';
import { SortPipe } from '@shared/pipes/sort';
import { AppHighLightDirective } from '@shared/directives/app-high-light';
import { SelectDropdownComponent } from '@shared/components/select-dropdown/select-dropdown.component';

@NgModule({
  declarations: [
    AppHighLightDirective,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
    SortPipe,
    SelectDropdownComponent,
  ],
  exports: [
    AppHighLightDirective,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
    SortPipe,
    SelectDropdownComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ShareModule {}
