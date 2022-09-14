import { Component } from '@angular/core';

@Component({
  selector: 'app-open-close-page',
  templateUrl: './open-close-page.component.html',
  styleUrls: ['./open-close-page.component.scss'],
})
export class OpenClosePageComponent {
  logging: boolean = false;

  public toggleLogging(): void {
    this.logging = !this.logging;
  }
}
