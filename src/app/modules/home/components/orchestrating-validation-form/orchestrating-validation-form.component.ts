import { Component } from '@angular/core';
import { MyServiceService } from '@shared/service/my-service.service';

@Component({
  selector: 'app-orchestrating-validation-form',
  templateUrl: './orchestrating-validation-form.component.html',
  styleUrls: ['./orchestrating-validation-form.component.scss'],
})
export class OrchestratingValidationFormComponent {
  constructor(private myService: MyServiceService) {
    console.log(myService.valueX, myService.valueY, myService.name, myService.form);
  }
}
