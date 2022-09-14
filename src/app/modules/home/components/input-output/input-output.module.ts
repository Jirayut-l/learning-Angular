import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AliasingComponent } from '@home/pages/input-output/aliasing';
import { HeroInputOutputComponent } from '@home/pages/input-output/hero-input-output';
import { InTheMetadataComponent } from '@home/pages/input-output/in-the-metadata';
import { ItemDetailComponent } from '@home/pages/input-output/item-detail';
import { ItemInputOutputComponent } from '@home/pages/input-output/item-input-output';
import { ItemOutputComponent } from '@home/pages/input-output/item-output';
import { ShareCallbackMethodComponent } from '@home/pages/input-output/share-callback-method';
import { SizerComponent } from '@home/pages/input-output/sizer';

@NgModule({
  declarations: [
    AliasingComponent,
    SizerComponent,
    ItemOutputComponent,
    ItemDetailComponent,
    InTheMetadataComponent,
    ItemInputOutputComponent,
    HeroInputOutputComponent,
    ShareCallbackMethodComponent,
  ],
  exports: [
    AliasingComponent,
    SizerComponent,
    ItemOutputComponent,
    ItemDetailComponent,
    InTheMetadataComponent,
    ItemInputOutputComponent,
    HeroInputOutputComponent,
    ShareCallbackMethodComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class InputOutputModule {}
