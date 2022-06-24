import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-share-callback-method',
  templateUrl: './share-callback-method.component.html',
  styleUrls: ['./share-callback-method.component.scss']
})
export class ShareCallbackMethodComponent {
  @Input() public handlerConditionAction: (canAction: boolean) => boolean = () => {
    return false
  };
  conditionAction: boolean = true;
  @Input() public testFunction: (param: string) => string = (param: string) => {
    return param
  };
}
