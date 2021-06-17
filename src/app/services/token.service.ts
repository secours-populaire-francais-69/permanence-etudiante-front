import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private route: ActivatedRoute, private router: Router) {}

  get isLogged() {
    return !!localStorage.getItem('jwt');
  }

  set token(token: string | null) {
    if (!token) {
      localStorage.removeItem('jwt');
    } else {
      localStorage.setItem('jwt', `Bearer ${token}`);
    }
  }

  redirectoToLogin() {
    this.router.navigate(['/login'], {
      relativeTo: this.route,
    });
  }

  canActivate(): boolean {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      this.redirectoToLogin();
      return false;
    }
    return true;
  }
}
