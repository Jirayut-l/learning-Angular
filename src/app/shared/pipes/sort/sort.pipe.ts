import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../../models/Hero';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: Hero[], args: string): Hero[] {
    if (value) {
      return value.sort((a: Hero, b: Hero) => {
        if (a[args as keyof Hero] < b[args as keyof Hero]) {
          return -1;
        }
        if (b[args as keyof Hero] < a[args as keyof Hero]) {
          return 1;
        }
        return 0;
      });
    }
    return [];
  }
}
