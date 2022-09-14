import { Component, Input, OnInit } from '@angular/core';
import { HeroDetailService } from '@home/services/hero-detail';
import { Hero } from '@shared/models/Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero = {} as Hero;
  @Input() public id: number = 0;

  constructor(private heroDetailService: HeroDetailService) {}

  ngOnInit(): void {
    this.hero = this.heroDetailService.getHero(this.id);
  }
}
