import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-profile-editor-form',
    templateUrl: './profile-editor-form.component.html',
    styleUrls: ['./profile-editor-form.component.scss']
})
export class ProfileEditorFormComponent {
    profileForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl(''),
        address: new FormGroup({
            street: new FormControl(''),
            city: new FormControl(''),
            state: new FormControl(''),
            zip: new FormControl('')
        }),
        aliases: new FormArray([new FormControl('')])
    });

    get aliases(): FormArray {
        return this.profileForm.controls['aliases'] as FormArray;
    }

    public addAlias(): void {
        this.aliases.push(new FormControl(''));
    }

    public updateProfile(): void {
        this.profileForm.patchValue({
            firstName: 'Nancy',
            address: {
                street: '123 Drew Street'
            }
        });
    }

    public deleteAlias(index: number): void {
        this.aliases.removeAt(index);
    }
}
