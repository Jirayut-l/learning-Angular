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

  get prefixCode(): FormGroup {
    return this.loginForm.controls['prefixCode'] as FormGroup;
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
  // }
}
