import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '@services/event.service';
import { Event } from '@interfaces/event';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'spf-event-show',
  templateUrl: './show.component.html',
})
export class ShowComponent implements OnInit {
  event$!: Observable<Event>;

  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const eventId = this.route.snapshot.params.eventId;
    this.event$ = this.eventService.find(eventId);
  }

  delete(event: Event) {
    this.eventService.delete(event.id).subscribe(() => {
      this.toastr.success(`L'évenement du ${event.title} a été supprimé!`);
      this.router.navigate(['../'], {
        relativeTo: this.route,
      });
    });
  }
}
