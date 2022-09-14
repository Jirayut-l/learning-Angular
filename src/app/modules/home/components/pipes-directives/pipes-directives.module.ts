import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConditionallyComponent } from '@home/pages/pipes-directives/conditionally';
import { PipesComponent } from '@home/pages/pipes-directives/pipes';
import { SwitchingTemplatesComponent } from '@home/pages/pipes-directives/switching-templates';
import { ShareModule } from '@shared/share.module';

@NgModule({
  declarations: [ConditionallyComponent, SwitchingTemplatesComponent, PipesComponent],
  exports: [ConditionallyComponent, SwitchingTemplatesComponent, PipesComponent],
  imports: [CommonModule, FormsModule, ShareModule],
})
export class PipesDirectivesModule {}
