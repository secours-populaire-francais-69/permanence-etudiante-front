import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spf-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  @Input() iconOnly = false;
  @Input() bg = 'palette-grey-5';
  @Input() color = 'black';
  @Input() bgOpacity = 1;
  @Input() label?: string;

  ngOnInit() {
    this.bg = `hsla(var(--${this.bg}), ${this.bgOpacity})`;
    this.color = `hsl(var(--${this.color}))`;
  }
}
