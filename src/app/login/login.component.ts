import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoginInvalid = false;
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

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(
      () => {
        this.toastr.success('Connexion réussi!');
        this.authService.redirectoToHome();
      },
      () => (this.isLoginInvalid = true)
    );
  }
}
