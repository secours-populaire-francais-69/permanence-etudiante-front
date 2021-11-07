import { Component } from '@angular/core';
import { IconDirective } from '@shared/directives';

@Component({
  selector: 'spf-icon-lock',
  template: `<svg
    [attr.width]="size"
    [attr.height]="size"
    viewBox="0 0 24 24"
    [attr.fill]="fill | fill"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.19135 5.06177C8.9304 4.03532 10.1556 3.25 12 3.25C13.8444 3.25 15.0696 4.03532 15.8087 5.06177C16.5202 6.04998 16.75 7.21332 16.75 8V11.25H17.4C18.1456 11.25 18.75 11.8544 18.75 12.6V19.4C18.75 20.1456 18.1456 20.75 17.4 20.75H6.6C5.85442 20.75 5.25 20.1456 5.25 19.4V12.6C5.25 11.8544 5.85442 11.25 6.6 11.25H7.25V8C7.25 7.21332 7.47984 6.04998 8.19135 5.06177ZM8.75 11.25H15.25V8C15.25 7.45335 15.0798 6.61668 14.5913 5.93823C14.1304 5.29802 13.3556 4.75 12 4.75C10.6444 4.75 9.8696 5.29802 9.40865 5.93823C8.92016 6.61668 8.75 7.45335 8.75 8V11.25ZM6.75 12.75V19.25H17.25V12.75H6.75Z"
    />
  </svg>`,
})
export class LockIcon extends IconDirective {}
