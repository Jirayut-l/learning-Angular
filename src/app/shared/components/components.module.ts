import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar';
import { SiderbarComponent } from './siderbar';


@NgModule({
  declarations: [
    NavbarComponent,
    SiderbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
