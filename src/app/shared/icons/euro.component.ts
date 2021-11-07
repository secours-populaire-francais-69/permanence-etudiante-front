import { Component } from '@angular/core';
import { IconDirective } from '@shared/directives';

@Component({
  selector: 'spf-icon-euro',
  template: `<svg
    [attr.width]="size"
    [attr.height]="size"
    viewBox="0 0 24 24"
    [attr.fill]="fill | fill"
  >
    <path
      d="M15 4.75a7.252 7.252 0 00-6.71 4.5H16a.75.75 0 010 1.5H7.857a7.296 7.296 0 000 2.5H16a.75.75 0 010 1.5H8.29a7.252 7.252 0 009.882 3.772.75.75 0 11.656 1.348A8.754 8.754 0 016.69 14.75H5a.75.75 0 010-1.5h1.339a8.826 8.826 0 010-2.5H5a.75.75 0 010-1.5h1.69a8.754 8.754 0 0112.138-5.12.75.75 0 11-.656 1.348A7.218 7.218 0 0015 4.75z"
    />
  </svg>`,
})
export class EuroIcon extends IconDirective {}
