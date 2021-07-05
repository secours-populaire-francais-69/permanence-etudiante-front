import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BasicServiceRoutingModule } from './basic-service-routing.module';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [HomeComponent, NewComponent, EditComponent, ShowComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    BasicServiceRoutingModule,
  ],
})
export class BasicServiceModule {}
