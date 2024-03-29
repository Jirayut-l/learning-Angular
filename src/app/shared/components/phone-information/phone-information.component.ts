import { Component } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-information',
  templateUrl: './phone-information.component.html',
  styleUrls: ['./phone-information.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PhoneInformationComponent,
      multi: true,
    },
  ],
})
export class PhoneInformationComponent implements ControlValueAccessor {
  contact = new FormGroup({
    countryCode: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
  });

  registerOnChange(fn: any): void {
    console.log('on change', fn);
    this.contact.valueChanges.subscribe(res => res === fn);
  }

  registerOnTouched(fn: any): void {
    console.log('on blur', fn);
  }

  writeValue(val: any): void {
    val && this.contact.setValue(val, { emitEvent: false });
  }
}
