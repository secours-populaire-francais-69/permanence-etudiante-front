import { Component, Input } from '@angular/core';

@Component({
  selector: 'spf-icon-no-lock',
  template: `<svg
    attr.width="{{ size }}"
    attr.height.px="{{ size }}"
    viewBox="0 0 24 24"
    attr.fill="hsl(var(--{{ fill }}))"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.47 2.47a.75.75 0 011.06 0l18 18a.75.75 0 11-1.06 1.06l-1.77-1.768a1.35 1.35 0 01-1.301.988H6.6a1.35 1.35 0 01-1.35-1.35v-6.8c0-.746.604-1.35 1.35-1.35h.65V8.31L2.47 3.53a.75.75 0 010-1.06zm9.2 10.26l5.6 5.6a.755.755 0 00-.02.17v.75H6.75v-6.5h4.75a.755.755 0 00.17-.02zM8.75 9.81l1.44 1.44H8.75V9.81z"
    />
    <path
      d="M9.81 3.707c.616-.292 1.344-.457 2.19-.457 1.844 0 3.07.785 3.809 1.812.711.988.941 2.151.941 2.938v3.25h.65c.746 0 1.35.604 1.35 1.35v.4a.75.75 0 01-1.5 0v-.25H16a.75.75 0 01-.75-.75V8c0-.547-.17-1.383-.659-2.062-.46-.64-1.235-1.188-2.591-1.188-.647 0-1.152.125-1.547.313a.75.75 0 01-.643-1.356z"
    />
  </svg>`,
})
export class NoLockIcon {
  @Input() size: string | number = 24;
  @Input() fill: string = 'black';
}
