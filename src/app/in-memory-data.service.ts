import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' , position: 'mid', skill:'ice', hp:500},
      { id: 13, name: 'Bombasto' , position: 'mid', skill:'ice', hp:500},
      { id: 14, name: 'Celeritas' , position: 'mid', skill:'ice', hp:500},
      { id: 15, name: 'Magneta' , position: 'mid', skill:'ice', hp:500},
      { id: 16, name: 'RubberMan' , position: 'mid', skill:'ice', hp:500 },
      { id: 17, name: 'Dynama' , position: 'mid', skill:'ice', hp:500},
      { id: 18, name: 'Dr. IQ' , position: 'mid', skill:'ice', hp:500},
      { id: 19, name: 'Magma' , position: 'mid', skill:'ice', hp:500},
      { id: 20, name: 'Tornado' , position: 'mid', skill:'ice', hp:500}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}