import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanAccessComponent } from './components';
import { ArrowReturnIcon } from './icons';
import { EmailSentIllustration } from './illustrations';

@NgModule({
  imports: [CommonModule],
  declarations: [CanAccessComponent, ArrowReturnIcon, EmailSentIllustration],
  exports: [CanAccessComponent, ArrowReturnIcon, EmailSentIllustration],
})
export class SharedModule {}
