import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [ListComponent, NewComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    UsersRoutingModule,
  ],
})
export class UsersModule {}
