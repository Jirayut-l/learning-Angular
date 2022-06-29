import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-login-form',
  templateUrl: './reactive-login-form.component.html',
  styleUrls: ['./reactive-login-form.component.scss']
})
export class ReactiveLoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  showPasswordHint: boolean = false;

  get username(): AbstractControl {
    return this.loginForm.controls['username'];
  }

  get password(): AbstractControl {
    return this.loginForm.controls['password'];
  }

  // constructor(private builder: FormBuilder) {
  // }

  ngOnInit(): void {
    this.password.valueChanges.subscribe((value: string) => {
      this.showPasswordHint = value.length < 6;
    });
  }

  public login(): void {
    console.log(`User: ${this.username.value}`);
    console.log(`Password: ${this.password.value}`);
    if (this.password.value !== '1234567') {
      this.loginForm.controls['password'].setErrors({ 'invalid': true });
    }
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
