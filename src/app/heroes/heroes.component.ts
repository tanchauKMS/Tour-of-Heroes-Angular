import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../messages.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  @Input() newHero?: Hero;

  heroes: Hero[] = [];
  addHeroForm!: FormGroup;

  isModalOpen: boolean = false; // Flag to control modal visibility
  isShowAlert: boolean = false;

  openModal() {
    if (this.isModalOpen) {
      this.isModalOpen = false
    }
    else {
      this.isModalOpen = true;
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHeroes();
    this.addHeroForm = new FormGroup({
      name: new FormControl(),
      skill: new FormControl(),
      position: new FormControl(),
      hp: new FormControl()
    });
  }

  onClickAddHero(): void {
    const hero = this.addHeroForm.value;
    console.log(hero);
    if (!hero.name || !hero.skill || !hero.position || !hero.hp || hero.name.length < 4) {
      console.log("Error in inputing the component");
      this.isShowAlert = true;
    }
    else {
      this.isShowAlert = true;
      this.heroService.addHero(hero as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      })
    }

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, skill: string, position: string, hp: number): void {
    name = name.trim();
    skill = skill.trim()
    position = position.trim()

    if (!name || !skill || !position) { return; }
    this.heroService.addHero({ name, position, skill, hp } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
    this.isModalOpen = false;
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  goBack(): void {
    this.location.back();
  }
}