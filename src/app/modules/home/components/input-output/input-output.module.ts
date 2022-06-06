import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AliasingComponent } from "../../pages/input-output/aliasing";
import { HeroInputOutputComponent } from "../../pages/input-output/hero-input-output";
import { InTheMetadataComponent } from "../../pages/input-output/in-the-metadata";
import { ItemDetailComponent } from "../../pages/input-output/item-detail";
import { ItemInputOutputComponent } from "../../pages/input-output/item-input-output";
import { ItemOutputComponent } from "../../pages/input-output/item-output";
import { SizerComponent } from "../../pages/input-output/sizer";

@NgModule({
  declarations: [AliasingComponent,
    SizerComponent,
    ItemOutputComponent,
    ItemDetailComponent,
    InTheMetadataComponent,
    ItemInputOutputComponent,
    HeroInputOutputComponent],
  exports: [
    AliasingComponent,
    SizerComponent,
    ItemOutputComponent,
    ItemDetailComponent,
    InTheMetadataComponent,
    ItemInputOutputComponent,
    HeroInputOutputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class InputOutputModule {
}
