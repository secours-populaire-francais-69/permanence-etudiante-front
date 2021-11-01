import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { TokenService } from '@services/token.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'spf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSubmitting = false;
  isLoginInvalid = false;
  isSubmitEmpty = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  private isFirstRender = true;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.isLogged) {
      this.authService.redirectoToHome();
    }
  }

  ngDoCheck() {
    if (!this.isFirstRender) {
      this.checkEmptyForm();
    }
  }

  onSubmit() {
    const { valid, value } = this.loginForm;

    this.checkEmptyForm();

    if (!valid) return;

    this.isSubmitting = true;

    this.authService.login(value).subscribe(
      () => {
        this.authService.redirectoToHome();
        this.isSubmitting = false;
      },
      () => {
        this.isLoginInvalid = true;
        this.isSubmitting = false;
      }
    );
  }

  private checkEmptyForm() {
    const { touched, value } = this.loginForm;

    this.isSubmitEmpty = (!touched && !value) || (touched && !value);
    this.isFirstRender = false;
  }
}
