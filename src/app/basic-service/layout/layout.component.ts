import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
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
