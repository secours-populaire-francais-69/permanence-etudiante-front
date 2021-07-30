import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { TokenService } from '@services/token.service';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.scss'],
})
export class ForgottenPasswordComponent implements OnInit {
  isEmailSent = false;
  forgottenPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.isLogged) {
      this.authService.redirectoToHome();
    }
  }

  public onSubmit() {
    if (!this.forgottenPasswordForm.valid) {
      return;
    }
    this.authService
      .forgottenPassword(this.forgottenPasswordForm.value)
      .subscribe(() => (this.isEmailSent = true));
  }
}
