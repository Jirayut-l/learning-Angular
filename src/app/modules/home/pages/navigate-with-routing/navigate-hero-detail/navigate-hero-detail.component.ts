import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '@shared/models/Hero';

@Component({
  selector: 'app-navigate-hero-detail',
  templateUrl: './navigate-hero-detail.component.html',
  styleUrls: ['./navigate-hero-detail.component.scss']
})
export class NavigateHeroDetailComponent implements OnInit {
  hero: Hero = {} as Hero;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    ({ hero: this.hero } = this.route.snapshot.data);
  }

}
