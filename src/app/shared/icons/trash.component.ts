import { Component, Input } from '@angular/core';

@Component({
  selector: 'spf-icon-trash',
  template: `<svg
    attr.width="{{ size }}"
    attr.height.px="{{ size }}"
    viewBox="0 0 24 24"
    attr.fill="var(--{{ fill }})"
  >
    <path
      d="M17.4731 22.6831H7.47314C6.36858 22.6831 5.47314 21.7877 5.47314 20.6831V7.68311H3.47314V5.68311H7.47314V4.68311C7.47314 3.57854 8.36858 2.68311 9.47314 2.68311H15.4731C16.5777 2.68311 17.4731 3.57854 17.4731 4.68311V5.68311H21.4731V7.68311H19.4731V20.6831C19.4731 21.7877 18.5777 22.6831 17.4731 22.6831ZM7.47314 7.68311V20.6831H17.4731V7.68311H7.47314ZM9.47314 4.68311V5.68311H15.4731V4.68311H9.47314Z"
    />
  </svg>`,
})
export class TrashIcon {
  @Input() size: string | number = 24;
  @Input() fill: string = 'black';
}
