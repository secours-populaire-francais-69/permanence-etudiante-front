import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BasicServiceRoutingModule } from './basic-service-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [HomeComponent, LayoutComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    BasicServiceRoutingModule,
  ],
})
export class BasicServiceModule {}
