import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar';
import { SidebarComponent } from './components/siderbar';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule {
}
