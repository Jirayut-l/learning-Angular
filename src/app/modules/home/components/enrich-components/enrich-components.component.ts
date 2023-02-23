import { Component } from '@angular/core';
import { MyServiceService } from '@shared/service/my-service.service';
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

  constructor(private myService: MyServiceService) {
    myService.form.get('name')?.setValue('name this EnrichComponentsComponent');
    console.log(myService.valueX, myService.valueY, myService.name, myService.form);
    this.title$.subscribe(() => this.setTitle());
  }

  private setTitle(): void {
    const timestamp = new Date().getMilliseconds();
    this.title = `Hello Angular 10 (${timestamp})`;
  }
}
