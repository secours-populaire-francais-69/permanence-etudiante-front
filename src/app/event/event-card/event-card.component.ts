import { Component, Input } from '@angular/core';

@Component({
  selector: 'spf-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent {
  @Input() title?: string;
}
