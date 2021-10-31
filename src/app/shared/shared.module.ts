import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CanAccessComponent,
  BreadcrumbsComponent,
  FormGroupComponent,
  InputComponent,
  TextareaComponent,
  CheckboxComponent,
} from './components';
import { ArrowReturnIcon, CheckIcon, TrashIcon } from './icons';
import { EmailSentIllustration } from './illustrations';
import { FirstLetterPipe } from './pipes';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [
    FirstLetterPipe,
    CanAccessComponent,
    ArrowReturnIcon,
    EmailSentIllustration,
    BreadcrumbsComponent,
    CheckIcon,
    TrashIcon,
    FormGroupComponent,
    InputComponent,
    TextareaComponent,
    CheckboxComponent,
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
    InputComponent,
    TextareaComponent,
    CheckboxComponent,
  ],
})
export class SharedModule {}
