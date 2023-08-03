import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  heroForm!: FormGroup;
  showAlert = false;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.heroForm = new FormGroup({
      id : new FormControl(),
      name: new FormControl(),
      skill: new FormControl(),
      position: new FormControl(),
      hp: new FormControl()
    });
  }

  onClickSubmit(): void {
    const hero = this.heroForm.value;
    hero.id = this.hero?.id;
    console.log(hero)
    if (!hero.name || !hero.skill || !hero.position || !hero.hp) {
      this.showAlert = true
    }
    else {
    this.showAlert = true;
    this.heroService.updateHero(hero)
      .subscribe(
      () => this.goBack()
      );
    }
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}