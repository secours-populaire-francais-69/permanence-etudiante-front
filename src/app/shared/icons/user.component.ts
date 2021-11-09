import { Component, Input } from '@angular/core';

@Component({
  selector: 'spf-icon-user',
  template: `<svg
    attr.width="{{ size }}"
    attr.height.px="{{ size }}"
    viewBox="0 0 24 24"
    attr.fill="hsl(var(--{{ fill }}))"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.858 11.794a4.75 4.75 0 10-5.717 0A7.753 7.753 0 004.25 19v1a.75.75 0 001.5 0v-1a6.25 6.25 0 1112.5 0v1a.75.75 0 001.5 0v-1a7.753 7.753 0 00-4.892-7.206zM8.75 8a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0z"
    />
  </svg>`,
})
export class UserIcon {
  @Input() size: string | number = 24;
  @Input() fill: string = 'black';
}
