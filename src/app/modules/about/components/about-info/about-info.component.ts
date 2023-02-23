import { Component } from '@angular/core';
import { MyServiceService } from '@shared/service/my-service.service';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.scss'],
})
export class AboutInfoComponent {
  constructor(private myService: MyServiceService) {
    console.log(myService.valueX, myService.valueY, myService.name, myService.form);
  }
}
