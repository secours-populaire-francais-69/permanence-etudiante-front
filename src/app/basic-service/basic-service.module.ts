import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BasicServiceRoutingModule } from './basic-service-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [HomeComponent, LayoutComponent, NewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    BasicServiceRoutingModule,
  ],
})
export class BasicServiceModule {}
