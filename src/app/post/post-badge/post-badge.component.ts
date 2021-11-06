import { Component, Input } from '@angular/core';

@Component({
  selector: 'spf-post-badge',
  templateUrl: './post-badge.component.html',
  styleUrls: ['./post-badge.component.scss'],
})
export class PostBadgeComponent {
  @Input() isForVolunteers?: boolean = false;
  @Input() showTitle?: boolean = false;
}
