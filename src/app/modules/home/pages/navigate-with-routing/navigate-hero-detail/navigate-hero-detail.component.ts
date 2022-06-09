import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnrichHeroService } from '@home/services/enrich-components';
import { Hero } from '@shared/models/Hero';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navigate-hero-detail',
  templateUrl: './navigate-hero-detail.component.html',
  styleUrls: ['./navigate-hero-detail.component.scss']
})
export class NavigateHeroDetailComponent implements OnInit, OnDestroy {
  hero: Hero = {} as Hero;
  destroy$ = new Subject();

  constructor(private route: ActivatedRoute, private enrichHeroService: EnrichHeroService) {
  }

  ngOnInit(): void {
    // this.hero = this.route.snapshot.data['hero'];
    this.getHeroSnap();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private getHeroSnap(): void {
    const id = this.route.snapshot.params['id'] as number;
    this.enrichHeroService.getHero(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(hero => this.hero = hero);
  }
}
