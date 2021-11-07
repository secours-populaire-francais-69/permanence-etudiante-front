import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fill',
})
export class SvgFillPipe implements PipeTransform {
  transform(value: string) {
    if (value !== 'currentColor') {
      return `hsl(var(--${value}))`;
    }

    return value;
  }
}
