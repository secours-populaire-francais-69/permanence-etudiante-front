import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  CanAccessComponent,
  BreadcrumbsComponent,
  FormGroupComponent,
} from './components';
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
    FormGroupComponent,
  ],
  exports: [
    FirstLetterPipe,
    CanAccessComponent,
    ArrowReturnIcon,
    EmailSentIllustration,
    BreadcrumbsComponent,
    CheckIcon,
    TrashIcon,
    FormGroupComponent,
  ],
})
export class SharedModule {}
