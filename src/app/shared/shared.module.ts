import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CanAccessComponent, BreadcrumbsComponent } from './components';
import { ArrowReturnIcon } from './icons';
import { EmailSentIllustration } from './illustrations';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    CanAccessComponent,
    ArrowReturnIcon,
    EmailSentIllustration,
    BreadcrumbsComponent,
  ],
  exports: [
    CanAccessComponent,
    ArrowReturnIcon,
    EmailSentIllustration,
    BreadcrumbsComponent,
  ],
})
export class SharedModule {}
