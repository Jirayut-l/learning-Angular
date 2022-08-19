import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataDropdownList } from '@shared/models/DropdownList/data-dropdown-list';

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
        ]),
        prefixCode: new FormControl('',Validators.required)
    });
    showPasswordHint: boolean = false;
    prefixList: DataDropdownList[] = [
        { id: 1, label: 'Mr' },
        { id: 2, label: 'Mrs' },
        { id: 3, label: 'Miss' },
        { id: 4, label: 'Ms' },
    ]

    get username(): AbstractControl {
        return this.loginForm.controls['username'];
    }

    get password(): AbstractControl {
        return this.loginForm.controls['password'];
    }

    get prefixCode(): FormGroup {
        return this.loginForm.controls['prefixCode'] as FormGroup;
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

    public myFunction(): void {
        console.log(this.loginForm.controls['prefixCode']);
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
