import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';
import { DataDropdownList } from '@shared/models/DropdownList/data-dropdown-list';

@Component({
    selector: 'app-select-dropdown',
    templateUrl: './select-dropdown.component.html',
    styleUrls: ['./select-dropdown.component.scss']
})
export class SelectDropdownComponent implements OnInit {
    control = new FormControl('');
    @Input() listData: DataDropdownList[] = [];

    constructor(private controlContainer: ControlContainer) {
    }

    ngOnInit(): void {
        this.control = this.controlContainer.control as FormControl;
        console.log(this.control);
    }

    public trackById(index: number, item: DataDropdownList): number {
        return item.id;
    }
}
