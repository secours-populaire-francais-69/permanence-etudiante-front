import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CanAccessComponent, BreadcrumbsComponent } from './components';
import { ArrowReturnIcon, CheckIcon, TrashIcon } from './icons';
import { EmailSentIllustration } from './illustrations';
import { FirstLetterPipe } from './pipes';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    FirstLetterPipe,
    CanAccessComponent,
    ArrowReturnIcon,
    EmailSentIllustration,
    BreadcrumbsComponent,
    CheckIcon,
    TrashIcon,
  ],
  exports: [
    FirstLetterPipe,
    CanAccessComponent,
    ArrowReturnIcon,
    EmailSentIllustration,
    BreadcrumbsComponent,
    CheckIcon,
    TrashIcon,
  ],
})
export class SharedModule {}
