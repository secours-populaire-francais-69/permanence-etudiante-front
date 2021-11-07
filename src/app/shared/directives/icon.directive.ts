import { Directive, Input } from '@angular/core';

@Directive()
export class IconDirective {
  @Input() size: string | number = 24;
  @Input() fill: string = 'currentColor';
}
