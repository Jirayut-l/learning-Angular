import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { NavbarComponent } from './components/navbar';
import { SidebarComponent } from './components/siderbar';

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
