import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss']
})
export class SizerComponent implements OnChanges {

  @Input() public priceValue: number = 0;
  @Output() public priceChange = new EventEmitter<number>();
  @Input() public size: number = 0;
  @Output() public sizeChange = new EventEmitter<number>();
  // @Input()
  // public get price(): number {
  //   return this.priceValue;
  // }
  //
  // public set price(value: number) {
  //   this.priceValue = value;
  // }

  public increase(): void {
    this.resize(+1);
  }

  public decrease(): void {
    this.resize(-1);
  }

  public resize(delta: number): void {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
    this.priceValue = this.priceValue + delta;
    this.priceChange.emit(this.priceValue);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const sizeValue = changes['size'];
    const price = changes['priceValue'];
    const oldValue = sizeValue.previousValue;
    const newValue = sizeValue.currentValue;

    if (!sizeValue.isFirstChange()) {
      console.log(`sizeValue changed from ${oldValue} to ${newValue}`);
      console.log(`priceValue changed from ${price.previousValue} to ${price.currentValue}`);
    }
  }

}
