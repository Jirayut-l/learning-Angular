import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  valueX = '';
  valueY = '';
  name = '';
  form = new FormGroup({
    name: new FormControl(null),
    lastName: new FormControl(null),
  });
}
