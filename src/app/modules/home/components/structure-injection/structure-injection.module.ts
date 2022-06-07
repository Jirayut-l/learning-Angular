import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FavoriteHeroesComponent } from '@home/pages/structure-injection/favorite-heroes';
import { HeroDetailComponent } from '@home/pages/structure-injection/hero-detail';
import { HeroListComponent } from '@home/pages/structure-injection/hero-list';
import { ProductProvidersComponent } from '@home/pages/structure-injection/product-providers';

@NgModule({
  declarations: [
    FavoriteHeroesComponent,
    HeroDetailComponent,
    HeroListComponent,
    ProductProvidersComponent
  ],
  exports: [
    FavoriteHeroesComponent,
    HeroDetailComponent,
    HeroListComponent,
    ProductProvidersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StructureInjectionModule {
}
