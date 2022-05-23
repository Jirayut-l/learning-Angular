import { Component, EventEmitter, Input, Output } from '@angular/core';

//don't support style in current version  in ignore line shouldn't
@Component({
  selector: 'app-aliasing',
  templateUrl: './aliasing.component.html',
  styleUrls: ['./aliasing.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property,@angular-eslint/no-input-rename
  inputs: ['input1: saveForLaterItem1'], // propertyName:alias
  // eslint-disable-next-line @angular-eslint/no-output-rename,@angular-eslint/no-outputs-metadata-property
  outputs: ['outputEvent1: saveForLaterEvent1'] // propertyName:alias
})
export class AliasingComponent {

  input1: string = "";
  outputEvent1: EventEmitter<string> = new EventEmitter<string>();

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('wishListItem') public input2: string = ''; //  @Input(alias)
  // eslint-disable-next-line @angular-eslint/no-output-rename
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
