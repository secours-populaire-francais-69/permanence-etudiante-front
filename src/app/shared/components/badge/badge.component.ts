import { Component, Input } from '@angular/core';

@Component({
  selector: 'spf-badge',
  template: `<span class="h-stack-2">
    <ng-content></ng-content>
    <span>{{ title }}</span>
  </span>`,
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() label?: string;
  @Input() title?: string;
}
