import { Component, OnInit } from '@angular/core';
import { EventService } from '@services/event.service';
import { Event } from '@interfaces/event';
import { ApiStatus } from '@interfaces/api';

@Component({
  selector: 'spf-event-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  events?: Event[];
  apiStatus: ApiStatus = 'idle';

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.apiStatus = 'loading';
    this.eventService.getAll().subscribe((events) => {
      if (!events) this.apiStatus = 'empty';

      this.events = events.reverse();
      this.apiStatus = 'success';
    });
  }
}
