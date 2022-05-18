import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AliasingComponent} from "../../pages/input-output/aliasing";
import {SizerComponent} from "../../pages/input-output/sizer";
import {ItemOutputComponent} from "../../pages/input-output/item-output";
import {ItemDetailComponent} from "../../pages/input-output/item-detail";
import {InTheMetadataComponent} from "../../pages/input-output/in-the-metadata";
import {ItemInputOutputComponent} from "../../pages/input-output/item-input-output";
import {HeroInputOutputComponent} from "../../pages/input-output/hero-input-output";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AliasingComponent,
    SizerComponent,
    ItemOutputComponent,
    ItemDetailComponent,
    InTheMetadataComponent,
    ItemInputOutputComponent, HeroInputOutputComponent],
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
