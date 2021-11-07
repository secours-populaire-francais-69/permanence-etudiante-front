import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '@services/event.service';
import { Event } from '@interfaces/event';
import { Observable } from 'rxjs';

@Component({
  selector: 'spf-event-show',
  templateUrl: './show.component.html',
})
export class ShowComponent implements OnInit {
  event$!: Observable<Event>;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const eventId = this.route.snapshot.params.eventId;
    this.event$ = this.eventService.find(eventId);
  }
}
