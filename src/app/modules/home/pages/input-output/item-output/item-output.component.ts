import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.scss'],
})
export class ItemOutputComponent {
  @Output() public newItemEvent = new EventEmitter<string>();

  public addNewItem(value: string): void {
    console.log(`item-output.component : ${value} `);
    this.newItemEvent.emit(value);
  }
}
