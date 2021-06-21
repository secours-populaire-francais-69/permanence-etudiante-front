import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Login, LoginResponse } from '../interfaces/login';
import { User } from '../interfaces/User';
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<User | null>(null);

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
    this.user$.next(null);
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

  whoAmI() {
    this.http.get<any>(`${environment.api}whoami`).subscribe((user) => {
      this.user$.next(user);
    });
  }

  redirectoToHome() {
    this.router.navigate(['/home'], {
      relativeTo: this.route,
    });
  }
}
