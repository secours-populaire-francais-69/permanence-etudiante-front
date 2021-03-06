import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { User } from '@interfaces/user';

@Component({
  selector: 'spf-can-access',
  templateUrl: './can-access.component.html',
})
export class CanAccessComponent implements OnInit {
  user: User | null = null;
  @Input() forVolunteers: boolean = false;
  @Input() forAdmins: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => (this.user = user));
  }
}
