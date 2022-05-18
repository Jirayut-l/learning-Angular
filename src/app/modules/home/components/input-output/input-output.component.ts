import {Component} from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {

  hero: string = 'Spectrum';
  currentItem: string = 'Television Input';
  items: string[] = ['item1', 'item2', 'item3', 'item4'];
  lastChanceItem: string = 'Beanbag';
  fontSizePx: number = 16;
  price: number = 50;
  currentItem2: string = 'Television Input2';
  wishlist: string[] = ['Drone', 'Computer'];
  fontSizeOneWayPx: number = 20;

  public onLike(): void {
    window.alert(`I like ${this.hero}`);
    this.hero = 'Boothstomper';
  }

  public addItem(newItem: string): void {
    console.log(`app.component : ${newItem} `);
    this.items.push(newItem);
  }

  public crossOffItem(item: string): void {
    console.warn(`Parent says: crossing off ${item}.`);
  }

  public buyClearanceItem(item: string): void {
    console.warn(`Parent says: buying ${item}.`);
  }

  public saveForLater(item: string): void {
    console.warn(`Parent says: saving output item1: ${item} for later.`);
  }

  public addToWishList(wish: string): void {
    console.warn(`Parent says: adding ${this.currentItem} to your wishlist.`);
    this.wishlist.push(wish);
    console.warn(this.wishlist);
  }

  public increase(): void {
    this.fontSizeOneWayPx += 1;
  }

  public decrease(): void {
    this.fontSizeOneWayPx -= 1;
  }

}
