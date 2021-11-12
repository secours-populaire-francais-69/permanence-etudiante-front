import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spf-basic-service-card',
  templateUrl: './card.component.html',
  styles: [':host { display: block; }'],
})
export class CardComponent implements OnInit {
  @Input() id?: number;
  @Input() isClosed?: boolean;
  @Input() maxPeople?: number;
  @Input() startAt?: string;
  link?: string;

  ngOnInit() {
   this.link = `/basic-services/${this.id}`;
  }
}
