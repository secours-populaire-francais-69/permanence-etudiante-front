import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'spf-form-group',
  template: '<ng-content></ng-content>',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent {
  @Input() class: string = '';

  @HostBinding('class') get className() {
    return this.class;
  }
}
