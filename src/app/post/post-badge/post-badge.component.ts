import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spf-post-badge',
  templateUrl: './post-badge.component.html',
  styleUrls: ['./post-badge.component.scss'],
})
export class PostBadgeComponent implements OnInit {
  @Input() isForVolunteers = false;
  @Input() iconOnly = false;
  label?: string;

  ngOnInit() {
    if (!this.iconOnly) {
      this.label = this.isForVolunteers
        ? 'Visible par tous'
        : 'Réserver aux bénévoles';
    }
  }
}
