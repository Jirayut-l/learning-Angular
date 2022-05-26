import { Component } from '@angular/core';
import { Hero } from 'src/app/shared/models/Hero';

@Component({
  selector: 'app-switching-templates',
  templateUrl: './switching-templates.component.html',
  styleUrls: ['./switching-templates.component.scss']
})
export class SwitchingTemplatesComponent  {


  public heroes: Hero[] = [
    {id: 1, name: 'Boothstomper', team: 'avengers'},
    {id: 2, name: 'Drogfisher', team: 'avengers'},
    {id: 3, name: 'Bloodyllips', team: 'villains'},
    {id: 4, name: 'Mr Bu Moverse', team: 'villains'},
    {id: 5, name: 'Piranhaelli', team: ''},
    {id: 6, name: 'Zebra', team: 'avengers'},
  ];

  public heroes2: Hero[] = [
    {id: 1, name: 'Boothstomper', team: 'avengers'},
    {id: 2, name: 'Drogfisher', team: 'avengers'},
    {id: 3, name: 'Bloodyllips', team: 'villains'},
    {id: 4, name: 'Mr Bu Moverse', team: 'villains'},
    {id: 5, name: 'Piranhaelli', team: ''},
    {id: 6, name: 'Zebra', team: 'avengers'},
    {id: 7, name: 'Mr Bu Moversesd', team: 'villains'},
  ];

  public trackByHeroes(index: number, hero: Hero): number {
    return hero.id;
  }

  public getNewHeroes(): void {
    this.heroes = this.heroes2;
  }
}
