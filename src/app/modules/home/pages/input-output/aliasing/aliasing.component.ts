import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-aliasing',
  templateUrl: './aliasing.component.html',
  styleUrls: ['./aliasing.component.scss'],
  inputs: ['input1: saveForLaterItem1'], // propertyName:alias
  outputs: ['outputEvent1: saveForLaterEvent1'] // propertyName:alias
})
export class AliasingComponent {

  input1: string = "";
  outputEvent1: EventEmitter<string> = new EventEmitter<string>();

  @Input('wishListItem') public input2: string = ''; //  @Input(alias)
  @Output('wishEvent') public outputEvent2 = new EventEmitter<string>(); //  @Output(alias) propertyName = ...

  public saveIt(): void {
    console.log('input1', this.input1);
    console.warn('Child says: emitting outputEvent1 with', this.input1);
    this.outputEvent1.emit(this.input1);
  }

  public wishForIt(): void {
    console.log('input2', this.input2);
    console.warn('Child says: emitting outputEvent2', this.input2);
    this.outputEvent2.emit(this.input2);
  }
}
