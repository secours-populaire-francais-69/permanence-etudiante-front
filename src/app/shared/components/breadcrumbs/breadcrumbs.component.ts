import { Component, Input } from '@angular/core';

@Component({
  selector: 'spf-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  @Input() title: string = 'Retour';
  @Input() link: string = '';
}
