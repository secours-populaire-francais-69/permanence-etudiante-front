import { Component } from '@angular/core';
import { IconDirective } from '@shared/directives';

@Component({
  selector: 'spf-icon-arrow-return',
  template: `<svg
    [attr.width]="size"
    [attr.height]="size"
    viewBox="0 0 24 24"
    [attr.fill]="fill | fill"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.70116 12.0789L9.77136 5.00867L11.226 6.46329L5.91166 11.7776H15.4285C18.8369 11.7776 21.5999 14.5406 21.5999 17.949V18.7299H19.5428V17.949C19.5428 15.6768 17.7007 13.8347 15.4285 13.8347H5.91166L11.226 19.1491L9.77136 20.6037L2.70116 13.5335C2.29948 13.1318 2.29948 12.4805 2.70116 12.0789Z"
    />
  </svg>`,
})
export class ArrowReturnIcon extends IconDirective {}
