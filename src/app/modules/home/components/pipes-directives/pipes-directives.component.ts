import { Component } from '@angular/core';
import { MyServiceService } from '@shared/service/my-service.service';

@Component({
  selector: 'app-pipes-directives',
  templateUrl: './pipes-directives.component.html',
  styleUrls: ['./pipes-directives.component.scss'],
})
export class PipesDirectivesComponent {
  constructor(private myService: MyServiceService) {
    console.log(myService.valueX, myService.valueY, myService.name, myService.form);
  }
}
