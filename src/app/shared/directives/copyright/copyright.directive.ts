import { Directive, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {
  @ViewChild('copyright', { static: false }) copyright!: ElementRef;

  constructor(private renderer: Renderer2) {
    renderer.addClass(this.copyright.nativeElement, 'copyright');
    renderer.setProperty(
     this.copyright.nativeElement,
      'textContent',
      `Copyright ©${new Date().getFullYear()} All Rights Reserved.`
    );
  }
}
