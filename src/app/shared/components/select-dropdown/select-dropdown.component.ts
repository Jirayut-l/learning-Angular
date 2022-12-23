import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective } from '@angular/forms';
import { DataDropdownList } from '@shared/models/DropdownList/data-dropdown-list';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss'],
})
export class SelectDropdownComponent implements OnInit {
  @Input() controlName: string = '';
  control = new FormControl('');
  // @Input() control: FormControl = new FormControl();
  @Input() listData: DataDropdownList[] = [];

  // constructor(private controlContainer: ControlContainer) {}
  constructor(private formGroupDirective: FormGroupDirective, private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    console.log(this.controlContainer, 'controlContainer');
    this.control = this.formGroupDirective.form.controls[this.controlName] as FormControl;
    console.log(this.formGroupDirective);
    // this.control = this.controlContainer.control as FormControl;
  }

  public trackById(index: number, item: DataDropdownList): number {
    return item.id;
  }
}
