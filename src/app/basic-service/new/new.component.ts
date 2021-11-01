import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { BasicServices } from '@services/basic-services.service';
import { ToastrService } from 'ngx-toastr';

// TODO: Ajouter les horaires pour chaque input date + màj api avec nvx fields
@Component({
  selector: 'spf-basic-service-new',
  templateUrl: './new.component.html',
})
export class NewComponent implements OnInit {
  isSubmitting = false;
  basicServiceForm = new FormGroup({
    startAt: new FormControl('', [Validators.required]),
    endAt: new FormControl('', [Validators.required]),
    maxPeople: new FormControl(1, [Validators.min(1), Validators.max(1000)]),
    isClosed: new FormControl(false),
  });

  constructor(
    private authService: AuthService,
    private basicServicesService: BasicServices,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.basicServiceForm.valid) return;

    this.isSubmitting = true;
    this.basicServicesService
      .create(this.basicServiceForm.value)
      .subscribe(() => {
        this.isSubmitting = false;
        this.toastr.success('Création réussie !');
        this.authService.redirectoToHome();
      });
  }
}
