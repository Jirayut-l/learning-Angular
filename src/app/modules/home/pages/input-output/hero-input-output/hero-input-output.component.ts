import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-hero-input-output',
  templateUrl: './hero-input-output.component.html',
  styleUrls: ['./hero-input-output.component.scss']
})
export class HeroInputOutputComponent implements OnChanges {
  @Input() public name: string = "";
  @Output() public liked = new EventEmitter();
  // @Output() nameChange = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    const hero = changes['name'];
    const oldValue = hero.previousValue;
    const newValue = hero.currentValue;

    if (!hero.isFirstChange()) {
      console.log(`Hero changed from ${oldValue} to ${newValue}`);
    }
  }

  // changeValue(): void {
  //   this.nameChange.emit('EditX');
  // }
}
