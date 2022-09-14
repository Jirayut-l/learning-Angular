import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '@shared/models/Hero';

@Component({
  selector: 'app-navigate-hero-detail',
  templateUrl: './navigate-hero-detail.component.html',
  styleUrls: ['./navigate-hero-detail.component.scss'],
})
export class NavigateHeroDetailComponent implements OnInit {
  hero: Hero = {} as Hero;

  // destroy$ = new Subject();
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.hero = this.route.snapshot.data['hero'];
    console.log(this.hero);
  }

  // ngOnDestroy(): void {
  //   this.destroy$.next(true);
  //   this.destroy$.complete();
  // }
  // private getHeroSnap(): void {
  //   const id = this.route.snapshot.params['id'] as number;
  //   this.enrichHeroService.getHero(id)
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe(hero => this.hero = hero);
  // }
}
