import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';

import { InnerLayoutComponent } from './inner-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  declarations: [InnerLayoutComponent],
  exports: [InnerLayoutComponent],
})
export class LayoutsModule {}
