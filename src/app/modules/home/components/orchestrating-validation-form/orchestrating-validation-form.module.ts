import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroFormComponent } from '@home/pages/orchestrating-validation-form/hero-form';
import { LoginFormComponent } from '@home/pages/orchestrating-validation-form/login-form';
import { ReactiveLoginFormComponent } from '@home/pages/orchestrating-validation-form/reactive-login-form';
import { ShareModule } from '@shared/share.module';

@NgModule({
  declarations: [
    HeroFormComponent,
    LoginFormComponent,
    ReactiveLoginFormComponent
  ],
  exports: [
    LoginFormComponent,
    ReactiveLoginFormComponent,
    HeroFormComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ShareModule
    ]
})
export class OrchestratingValidationFormModule {
}
