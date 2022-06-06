import { TemplateRef, ViewContainerRef } from '@angular/core';
import { PermissionDirective } from './permission.directive';

describe('PermissionDirective', () => {
  let tmplRef: TemplateRef<HTMLElement>;
  let vc: ViewContainerRef;
  it('should create an instance', () => {
    const directive = new PermissionDirective(tmplRef, vc);
    expect(directive).toBeTruthy();
  });
});
