import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteHeroesComponent } from '../../pages/structure-injection/favorite-heroes';
import { HeroDetailComponent } from '../../pages/structure-injection/hero-detail';
import { HeroListComponent } from '../../pages/structure-injection/hero-list';

@NgModule({
  declarations: [
    FavoriteHeroesComponent,
    HeroDetailComponent,
    HeroListComponent
  ],
  exports: [
    FavoriteHeroesComponent,
    HeroDetailComponent,
    HeroListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StructureInjectionModule {
}
