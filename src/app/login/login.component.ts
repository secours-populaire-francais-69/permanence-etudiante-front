import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { TokenService } from '@services/token.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isFirstRender = true;
  isLoginInvalid = false;
  isSubmitEmpty = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private toastr: ToastrService
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

  public onSubmit() {
    const { valid, value } = this.loginForm;

    this.checkEmptyForm();

    if (!valid) {
      return;
    }

    this.authService.login(value).subscribe(
      () => {
        this.toastr.success('Connexion réussi!');
        this.authService.redirectoToHome();
      },
      () => (this.isLoginInvalid = true)
    );
  }

  private checkEmptyForm() {
    const { touched, value } = this.loginForm;

    this.isSubmitEmpty = !touched || (touched && !value);
    this.isFirstRender = false;
  }
}
