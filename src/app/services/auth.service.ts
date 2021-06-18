import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Login, LoginResponse } from '../interfaces/login';
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  login(loginValues: Login) {
    return this.http
      .post<LoginResponse>(`${environment.api}login`, loginValues)
      .pipe(
        tap((response) => {
          this.tokenService.token = response.data.token;
        })
      );
  }

  logout() {
    this.tokenService.token = null;
    this.tokenService.redirectoToLogin();
  }

  forgottenPassword(forgottenPassword: { email: string }) {
    return this.http.post<{ status: string }>(
      `${environment.api}forgotten-password`,
      {
        forgottenPassword,
      }
    );
  }

  resetPassword(resetPassword: {
    resetPasswordToken: string;
    password: string;
  }) {
    return this.http
      .post<LoginResponse>(`${environment.api}reset-password`, {
        resetPassword,
      })
      .pipe(
        tap((response) => {
          this.tokenService.token = response.data.token;
        })
      );
  }

  redirectoToHome() {
    this.router.navigate(['/home'], {
      relativeTo: this.route,
    });
  }
}
