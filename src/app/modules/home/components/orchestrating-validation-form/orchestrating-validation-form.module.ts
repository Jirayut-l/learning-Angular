import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroFormComponent } from '@home/pages/orchestrating-validation-form/hero-form';
import { LoginFormComponent } from '@home/pages/orchestrating-validation-form/login-form';
import { NameEditorFormComponent } from '@home/pages/orchestrating-validation-form/name-editor-form';
import { ProfileEditorFormComponent } from '@home/pages/orchestrating-validation-form/profile-editor-form';
import { ReactiveLoginFormComponent } from '@home/pages/orchestrating-validation-form/reactive-login-form';
import { ShareModule } from '@shared/share.module';

@NgModule({
    declarations: [
        HeroFormComponent,
        LoginFormComponent,
        ReactiveLoginFormComponent,
        NameEditorFormComponent,
        ProfileEditorFormComponent
    ],
    exports: [
        LoginFormComponent,
        ReactiveLoginFormComponent,
        HeroFormComponent,
        NameEditorFormComponent,
        ProfileEditorFormComponent
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
