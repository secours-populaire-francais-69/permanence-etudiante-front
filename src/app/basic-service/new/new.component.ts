import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { BasicServices } from '../../services/basic-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  basicServiceForm = new FormGroup({
    startAt: new FormControl('', [Validators.required]),
    endAt: new FormControl('', [Validators.required]),
    maxPeople: new FormControl(1, [Validators.min(1), Validators.max(1000)]),
    isClosed: new FormControl(false),
  });

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private basicServicesService: BasicServices,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.basicServiceForm.valid) {
      return;
    }
    this.basicServicesService
      .create(this.basicServiceForm.value)
      .subscribe(() => {
        this.toastr.success('Enregistrement réussi!');
        this.authService.redirectoToHome();
      });
  }
}
