import { Component, OnInit } from '@angular/core';
import { User } from '@interfaces/user';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'spf-inner-layout',
  templateUrl: './inner-layout.component.html',
  styleUrls: ['./inner-layout.component.scss'],
})
export class InnerLayoutComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.whoAmI();
    this.authService.user$.subscribe((user) => (this.user = user));
  }

  logout() {
    this.authService.logout();
  }
}
