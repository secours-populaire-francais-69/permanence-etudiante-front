import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicServices } from '@services/basic-services.service';
import { BasicService } from '@interfaces/basic-service';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  isSubmitting = false;
  basicServiceForm = new FormGroup({
    id: new FormControl(null),
    startAt: new FormControl('', [Validators.required]),
    endAt: new FormControl('', [Validators.required]),
    maxPeople: new FormControl(1, [Validators.min(1), Validators.max(1000)]),
    isClosed: new FormControl(false),
  });

  constructor(
    private basicServicesService: BasicServices,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const basicServiceId = this.route.snapshot.params.basicServiceId;
    this.initForm(basicServiceId);
  }

  initForm(basicServiceId: string) {
    this.basicServicesService
      .find(basicServiceId)
      .subscribe((basicService: BasicService) => {
        this.basicServiceForm.controls.id.setValue(basicService.id);
        this.basicServiceForm.controls.startAt.setValue(
          formatDate(basicService.startAt, 'yyyy-MM-dd', 'fr')
        );
        this.basicServiceForm.controls.endAt.setValue(
          formatDate(basicService.endAt, 'yyyy-MM-dd', 'fr')
        );
        this.basicServiceForm.controls.maxPeople.setValue(
          basicService.maxPeople
        );
        this.basicServiceForm.controls.isClosed.setValue(basicService.isClosed);
      });
  }

  onSubmit() {
    if (!this.basicServiceForm.valid) return;

    this.isSubmitting = true;
    this.basicServicesService
      .update(this.basicServiceForm.value)
      .subscribe(() => {
        this.isSubmitting = false;
        this.toastr.success('Modification réussie !');
        this.router.navigate(['../'], {
          relativeTo: this.route,
        });
      });
  }
}
