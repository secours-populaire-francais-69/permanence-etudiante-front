import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '@services/token.service';

@Component({
  selector: 'spf-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {
  hasResetPasswordFailed = false;
  resetPasswordForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    resetPasswordToken: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const resetPasswordToken = this.route.snapshot.queryParams.token;
    if (this.tokenService.isLogged || !resetPasswordToken) {
      this.authService.redirectoToHome();
    }
    if (resetPasswordToken) {
      this.resetPasswordForm.controls.resetPasswordToken.setValue(
        resetPasswordToken
      );
    }
  }

  onSubmit() {
    if (!this.resetPasswordForm.valid) {
      return;
    }
    this.authService.resetPassword(this.resetPasswordForm.value).subscribe(
      () => {
        this.toastr.success('Modification du mot de passe réussi!');
        this.authService.redirectoToHome();
      },
      () => (this.hasResetPasswordFailed = true)
    );
  }
}
