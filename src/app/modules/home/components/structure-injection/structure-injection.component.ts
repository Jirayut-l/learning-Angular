import { Component, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig, appSettings } from '@shared/config/app';

@Component({
  selector: 'app-structure-injection',
  templateUrl: './structure-injection.component.html',
  styleUrls: ['./structure-injection.component.scss'],
  providers: [{
    provide: APP_CONFIG,
    useValue: appSettings
  }]
})
export class StructureInjectionComponent {
  title: string = "";
  version: number = 0;

  constructor(@Inject(APP_CONFIG) config: AppConfig) {
    this.title = config.title;
    this.version = config.version;
  }
}
