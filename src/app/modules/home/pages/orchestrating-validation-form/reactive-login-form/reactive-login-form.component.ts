import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataDropdownList } from '@shared/models/DropdownList/data-dropdown-list';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-reactive-login-form',
  templateUrl: './reactive-login-form.component.html',
  styleUrls: ['./reactive-login-form.component.scss'],
})
export class ReactiveLoginFormComponent implements OnInit {
  editor: EditorType = 'name';
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    prefixCode: new FormControl('', Validators.required),
    valueX: new FormControl('', Validators.required),
    status: new FormControl(false, Validators.requiredTrue),
    // contact: new FormGroup({
    //   countryCode: new FormControl(''),
    //   phoneNumber: new FormControl(''),
    // }
    contact: new FormControl(''),
  });
  showPasswordHint: boolean = false;
  prefixList: DataDropdownList[] = [
    { id: 1, label: 'Mr' },
    { id: 2, label: 'Mrs' },
    { id: 3, label: 'Miss' },
    { id: 4, label: 'Ms' },
  ];

  get username(): AbstractControl {
    return this.loginForm.controls['username'];
  }

  get password(): AbstractControl {
    return this.loginForm.controls['password'];
  }

  get status(): AbstractControl {
    return this.loginForm.controls['status'];
  }

  get prefixCode(): FormControl {
    return this.loginForm.controls['prefixCode'] as FormControl;
  }

  get showNameEditor(): boolean {
    return this.editor === 'name';
  }

  get showProfileEditor(): boolean {
    return this.editor === 'profile';
  }

  // constructor(private builder: FormBuilder) {
  // }
  ngOnInit(): void {
    this.password.valueChanges.subscribe((value: string) => {
      this.showPasswordHint = value.length < 6;
    });
  }

  public login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(`User: ${this.username.value}`);
    console.log(`Password: ${this.password.value}`);
    if (this.password.value !== '1234567') {
      this.loginForm.controls['password'].setErrors({ invalid: true });
    }
  }

  public toggleEditor(type: EditorType): void {
    this.editor = type;
  }

  public disableForm(): void {
    this.loginForm.disable();
  }

  // private buildForm(): void {
  //   this.loginForm = this.builder.group({
  //     username: ['', Validators.required],
  //     password: ['', [
  //       Validators.required,
  //       Validators.minLength(6)
  //     ]]
  //   });
  //#region PlusMinus
  static plusMinus(arr: number[]): void {
    let valuePositive = 0;
    let valueNegative = 0;
    let valueZero = 0;
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
      if (arr[i] === 0) {
        valueZero++;
      }
      if (arr[i] > 0) {
        valuePositive++;
      }
      if (arr[i] < 0) {
        valueNegative++;
      }
    }
    ReactiveLoginFormComponent.calculation(valuePositive, arrLength);
    ReactiveLoginFormComponent.calculation(valueNegative, arrLength);
    ReactiveLoginFormComponent.calculation(valueZero, arrLength);
  }

  static calculation(value: number, length: number): void {
    const result = (value / length).toFixed(6);
    console.log(result);
  }

  //#region miniMaxSum
  static miniMaxSum(arr: number[]): void {
    let result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      // let resultArr = arr.filter((_, index) => index !== i);
      // result.push(
      //   resultArr.reduce(
      //     (previousValue, currentValue, currentIndex) => (currentIndex !== i ? previousValue + currentValue : 0),
      //     0
      //   )
      // );
      result.push(
        arr.reduce(
          (previousValue, currentValue, currentIndex) =>
            currentIndex !== i ? previousValue + currentValue : previousValue,
          0
        )
      );
    }
    console.log(Math.min(...result), Math.max(...result));
  }

  //#endregion

  //#region timeConversion
  static timeConversion(s: string): string {
    let formatTime = s.substring(8);
    let fullTime = s.substring(0, 8);
    let timeSplit = fullTime.split(':');
    if (timeSplit[0] === '12') {
      timeSplit[0] = '00';
    }
    if (formatTime === 'PM') {
      const hour = parseInt(timeSplit[0], 10) + 12;
      timeSplit[0] = hour.toString();
    }
    return timeSplit.join(':');
  }

  //#endregion

  //#region breakingRecords
  static breakingRecords(scores: number[]): number[] {
    let maxValue = 0;
    let minValue = 0;
    const result: number[] = [0, 0];
    for (let i = 0; i < scores.length; i++) {
      const iScore = scores[i];
      if (i === 0) {
        maxValue = iScore;
        minValue = iScore;
      }
      if (iScore > maxValue) {
        maxValue = iScore;
        result[0] = parseInt(result[0]?.toString(), 10) + 1;
      }
      if (iScore < minValue) {
        minValue = iScore;
        result[1] = parseInt(result[1]?.toString(), 10) + 1;
      }
    }
    return result;
  }

  //#endregion

  //#region camelCase
  static camelCase(): void {
    const str = 'S;M;plasticCup()';
    const formatString = str.substring(0, 3).split(';');
    let input = str.substring(4).split(/(?=[A-Z])/);
    const operation = formatString[0];
    const typeValue = formatString[1];
    if (operation === 'S') {
      ReactiveLoginFormComponent.splitClassMethodAndVariable(input);
    } else {
      ReactiveLoginFormComponent.combineClassMethodAndVariable(input, typeValue);
    }
  }

  //#endregion

  static splitClassMethodAndVariable(input: string[]): void {
    console.log(input.join(' ').toLocaleLowerCase().replace('(', '').replace(')', '').trim() + '\n');
  }

  static combineClassMethodAndVariable(input: string[], type: string): void {
    let resultMethodAndVariable = '';
    let resultClass = '';
    const splitInput = input.join('').split(' ');
    for (let i = 0; i < splitInput.length; i++) {
      if (type === 'M' || type === 'V') {
        if (i > 0) {
          resultMethodAndVariable += splitInput[i].charAt(0).toUpperCase() + splitInput[i].substring(1);
        } else {
          resultMethodAndVariable += splitInput[i];
        }
      }
      if (type === 'C') {
        resultClass += splitInput[i].charAt(0).toUpperCase() + splitInput[i].substring(1);
      }
    }
    switch (type) {
      case 'V':
        console.log(`${resultMethodAndVariable.trim()}\n`);
        break;
      case 'C':
        console.log(`${resultClass.trim()}\n`);
        break;
      case 'M':
        console.log(`${resultMethodAndVariable.trim()}()\n`);
        break;
      default:
        break;
    }
  }

  //#endregion
  static matchingStrings(strings: string[], queries: string[]): number[] {
    let result: number[] = [];
    for (let i = 0; i < queries.length; i++) {
      result.push(strings.filter(f => f === queries[i]).length);
    }
    return result;
  }

  // }
  public speak(): void {
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'Learning a new language is difficult. ';
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }
}
