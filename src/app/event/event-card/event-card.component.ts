import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spf-event-card',
  templateUrl: './event-card.component.html',
  styles: [':host { display: block; }'],
})
export class EventCardComponent implements OnInit {
  @Input() title?: string;
  @Input() id?: number;
  @Input() isFree?: boolean;
  @Input() isClosed?: boolean;
  @Input() maxPeople?: number;
  @Input() endAt?: string;
  @Input() startAt?: string;
  link?: string;

  ngOnInit() {
    this.link = `/events/${this.id}`;
  }
}
