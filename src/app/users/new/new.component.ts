import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from '@services/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
})
export class NewComponent implements OnInit {
  isSubmitting = false;
  usersFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    popAcceuilNumber: new FormControl(''),
    isVolunteer: new FormControl(false, [Validators.required]),
    isAdmin: new FormControl(false),
  });

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.usersFormGroup.valid) return;

    this.isSubmitting = true;
    // TODO: Send to /sign-up
    // this.eventService.create(this.usersFormGroup.value).subscribe(() => {
    //   this.isSubmitting = false;
    //   this.toastr.success('Utilisateur ajouté !');
    // });
  }
}
