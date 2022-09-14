import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-enrich-components',
  templateUrl: './enrich-components.component.html',
  styleUrls: ['./enrich-components.component.scss'],
})
export class EnrichComponentsComponent {
  title: string = 'my-app';
  title$: Observable<unknown> = new Observable<unknown>(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  constructor() {
    this.title$.subscribe(() => this.setTitle());
  }

  private setTitle(): void {
    const timestamp = new Date().getMilliseconds();
    this.title = `Hello Angular 10 (${timestamp})`;
  }
}
