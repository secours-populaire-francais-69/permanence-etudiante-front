import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanAccessComponent } from './can-access/can-access.component';

@NgModule({
  declarations: [CanAccessComponent],
  imports: [CommonModule],
  exports: [CanAccessComponent],
})
export class SharedModule {}
