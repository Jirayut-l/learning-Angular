import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-item-input-output',
  templateUrl: './item-input-output.component.html',
  styleUrls: ['./item-input-output.component.scss']
})
export class ItemInputOutputComponent {

  @Input() public item: string = "";
  @Output() public deleteRequest = new EventEmitter<string>();

  lineThrough: string = "";

  public delete(): void {
    console.warn('Child says: emitting item deleteRequest with', this.item);
    this.deleteRequest.emit(this.item);
    this.lineThrough = this.lineThrough ? 'underline' : 'line-through';
  }

}
