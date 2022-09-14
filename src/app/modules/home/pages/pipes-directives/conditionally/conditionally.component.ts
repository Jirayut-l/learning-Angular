import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conditionally',
  templateUrl: './conditionally.component.html',
  styleUrls: ['./conditionally.component.scss'],
})
export class ConditionallyComponent {
  @Input() public name: string = '';
}
