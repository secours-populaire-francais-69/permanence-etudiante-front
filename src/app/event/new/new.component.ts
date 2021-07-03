import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from '@services/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  eventForm = new FormGroup({
    startAt: new FormControl('', [Validators.required]),
    endAt: new FormControl('', [Validators.required]),
    maxPeople: new FormControl(1, [Validators.min(1), Validators.max(1000)]),
    isClosed: new FormControl(false),
    isFree: new FormControl(false),
    title: new FormControl('', [Validators.required]),
    comment: new FormControl(''),
  });

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.eventForm.valid) {
      return;
    }
    this.eventService.create(this.eventForm.value).subscribe(() => {
      this.toastr.success('Enregistrement réussi!');
    });
  }
}
