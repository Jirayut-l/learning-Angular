import {Component} from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {

  hero = 'Spectrum';

  onLike(): void {
    window.alert(`I like ${this.hero}`);
    this.hero = 'Boothstomper';
  }
}
