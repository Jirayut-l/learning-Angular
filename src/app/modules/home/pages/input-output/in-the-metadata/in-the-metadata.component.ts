import { Component, EventEmitter } from '@angular/core';

//don't support style in current version  in ignore line shouldn't
@Component({
  selector: 'app-in-the-metadata',
  templateUrl: './in-the-metadata.component.html',
  styleUrls: ['./in-the-metadata.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clearanceItem'],
  // eslint-disable-next-line @angular-eslint/no-outputs-metadata-property
  outputs: ['buyEvent']
})
export class InTheMetadataComponent {

  buyEvent = new EventEmitter<string>();
  clearanceItem: string = '';

  public buyIt(): void {
    console.warn('Child says: emitting buyEvent with', this.clearanceItem);
    this.buyEvent.emit(this.clearanceItem);
  }
}
