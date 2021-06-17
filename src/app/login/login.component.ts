import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  redirectoToHome() {
    this.router.navigate(['/home'], {
      relativeTo: this.route,
    });
  }

  ngOnInit(): void {
    if (this.tokenService.isLogged) {
      this.redirectoToHome();
    }
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(
      () => this.redirectoToHome(),
      (error) => (this.isLoginInvalid = true)
    );
  }
}
