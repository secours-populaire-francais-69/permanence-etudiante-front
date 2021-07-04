import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '@services/event.service';
import { Event } from '@interfaces/event';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  eventForm = new FormGroup({
    id: new FormControl(null),
    startAt: new FormControl('', [Validators.required]),
    endAt: new FormControl('', [Validators.required]),
    maxPeople: new FormControl(1, [Validators.min(1), Validators.max(1000)]),
    isClosed: new FormControl(false),
    isFree: new FormControl(false),
    title: new FormControl('', [Validators.required]),
    comment: new FormControl(''),
  });

  constructor(
    private eventsService: EventService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const eventId = this.route.snapshot.params.eventId;
    this.initForm(eventId);
  }

  initForm(eventId: string) {
    this.eventsService.find(eventId).subscribe((event: Event) => {
      this.eventForm.controls.id.setValue(event.id);
      this.eventForm.controls.startAt.setValue(new Date(event.startAt));
      this.eventForm.controls.endAt.setValue(new Date(event.endAt));
      this.eventForm.controls.maxPeople.setValue(event.maxPeople);
      this.eventForm.controls.isClosed.setValue(event.isClosed);
      this.eventForm.controls.isFree.setValue(event.isFree);
      this.eventForm.controls.title.setValue(event.title);
      this.eventForm.controls.comment.setValue(event.comment);
    });
  }

  onSubmit() {
    if (!this.eventForm.valid) {
      return;
    }
    this.eventsService.update(this.eventForm.value).subscribe(() => {
      this.toastr.success('Mise à jour réussi!');
      this.router.navigate(['../'], {
        relativeTo: this.route,
      });
    });
  }
}
