import { ElementRef, Renderer2 } from '@angular/core';
import { CopyrightDirective } from './copyright.directive';

describe('CopyrightDirective', () => {
  let renderer: Renderer2;
  let component: CopyrightDirective;
  let nativeElement: ElementRef;

  beforeEach(() => {
    nativeElement = {
      nativeElement: jest.fn()
    };
    renderer = { setProperty: jest.fn(), addClass: jest.fn() } as unknown as Renderer2;
    component = new CopyrightDirective(nativeElement, renderer);
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
