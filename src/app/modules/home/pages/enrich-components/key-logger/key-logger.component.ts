import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { filter, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.scss'],
})
export class KeyLoggerComponent implements OnInit {
  keys: string = '';
  @Input() public numeric: boolean = false;
  @ViewChild('keyContainer', { static: true }) public input: ElementRef<HTMLInputElement> = {} as ElementRef;

  ngOnInit(): void {
    console.log(this.input.nativeElement.className);
    const logger = fromEvent<KeyboardEvent>(this.input.nativeElement, 'keyup');
    logger
      .pipe(
        map((evt: KeyboardEvent) => evt.key.charCodeAt(0)),
        filter(code => {
          if (this.numeric) {
            return !(code > 31 && (code < 48 || code > 57));
          }
          return true;
        }),
        tap(digit => (this.keys += String.fromCharCode(digit)))
      )
      .subscribe();
  }
}
