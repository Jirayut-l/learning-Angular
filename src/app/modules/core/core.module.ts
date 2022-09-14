import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@core/components/navbar';
import { PageNotFoundComponent } from '@core/components/page-not-found';
import { SidebarComponent } from '@core/components/siderbar';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, PageNotFoundComponent],
  exports: [NavbarComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
