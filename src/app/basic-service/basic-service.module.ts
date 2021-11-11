import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BasicServiceRoutingModule } from './basic-service-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ListComponent,
    NewComponent,
    EditComponent,
    ShowComponent,
    HomeComponent,
  ],
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
