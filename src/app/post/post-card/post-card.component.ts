import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spf-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() title?: string;
  @Input() id?: number;
  @Input() isForVolunteers: boolean = false;
  @Input() createdAt?: string;
  @Input() userId?: number;
  link?: string;
  user?: string;

  ngOnInit() {
    this.link = `/posts/${this.id}`;
    // TODO: Appel userService pour récupérer l'utilisateur via userId
    // this.user = this.userId
  }
}
