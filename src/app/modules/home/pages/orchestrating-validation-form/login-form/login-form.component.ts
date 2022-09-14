import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';

  public login(): void {
    console.log(`User: ${this.username}`);
    console.log(`Password: ${this.password}`);
  }
}
