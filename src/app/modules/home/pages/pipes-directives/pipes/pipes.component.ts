import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  heroes = ['Boothstomper', 'Drogfisher', 'Bloodyllips', 'Mr Bu Moverse'];
  today = new Date();
  hero = {
    names: {
      name: 'Boothstomper',
      realName: 'Alfie Best',
    },
    planet: 'Earth',
    color: 'cyan',
  };
}
