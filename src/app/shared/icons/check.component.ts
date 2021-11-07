import { Component } from '@angular/core';
import { IconDirective } from '@shared/directives';

@Component({
  selector: 'spf-icon-check',
  template: `<svg
    [attr.width]="size"
    [attr.height]="size"
    viewBox="0 0 24 24"
    [attr.fill]="fill | fill"
  >
    <path
      d="M10.4927 18.3401L5.54272 13.3901L6.95672 11.9761L10.4942 15.5096L10.4927 15.5111L18.9777 7.02609L20.3917 8.44009L11.9067 16.9261L10.4937 18.3391L10.4927 18.3401Z"
    />
  </svg>`,
})
export class CheckIcon extends IconDirective {}
