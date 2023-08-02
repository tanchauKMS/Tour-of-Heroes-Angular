import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-views',
  templateUrl: './hero-views.component.html',
  styleUrls: ['./hero-views.component.css']
})

export class HeroViewsComponent {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  
  // save(): void {
  //   if (this.hero) {
  //     this.heroService.updateHero(this.hero)
  //       .subscribe(() => this.goBack());
  //   }
  // }
}
