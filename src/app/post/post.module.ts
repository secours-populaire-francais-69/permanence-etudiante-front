import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { PostRoutingModule } from './post-routing.module';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { ListComponent } from './list/list.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostBadgeComponent } from './post-badge/post-badge.component';

@NgModule({
  declarations: [EditComponent, NewComponent, ShowComponent, ListComponent, PostCardComponent, PostBadgeComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    PostRoutingModule,
  ],
})
export class PostModule {}
