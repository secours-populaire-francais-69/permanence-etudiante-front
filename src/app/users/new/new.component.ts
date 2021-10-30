import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@services/user.service';
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
    isStudent: new FormControl(false),
    isVolunteer: new FormControl(false),
    isAdmin: new FormControl(false),
  });

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.usersFormGroup.valid) return;

    this.isSubmitting = true;
    this.userService.create(this.usersFormGroup.value).subscribe(() => {
      this.isSubmitting = false;
      this.toastr.success('Utilisateur ajouté !');
    });
  }
}
