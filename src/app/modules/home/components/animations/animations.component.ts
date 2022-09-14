import { Component, HostBinding } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from '@shared/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [slideInAnimation],
})
export class AnimationsComponent {
  @HostBinding('@.disabled')
  public animationsDisabled: boolean = false;

  constructor(private contexts: ChildrenOutletContexts) {}

  public getRouteAnimationData(): unknown {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  public toggleAnimations(): void {
    this.animationsDisabled = !this.animationsDisabled;
  }
}
