import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name-editor-form',
  templateUrl: './name-editor-form.component.html',
  styleUrls: ['./name-editor-form.component.scss'],
})
export class NameEditorFormComponent {
  form = new FormGroup({
    name: new FormControl(''),
    nickName: new FormControl('Test1'),
  });

  updateName(): void {
    this.form.get('nickName')?.setValue('Test NickName');
  }
}
