import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero; // ? makes it optional

  constructor() { }

  ngOnInit(): void {

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}