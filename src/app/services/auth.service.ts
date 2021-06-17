import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Login, LoginResponse } from '../interfaces/login';
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

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
}
