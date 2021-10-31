import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventRoutingModule } from './event-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { SharedModule } from '@shared/shared.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ListComponent, NewComponent, ShowComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    EventRoutingModule,
  ],
})
export class EventModule {}
