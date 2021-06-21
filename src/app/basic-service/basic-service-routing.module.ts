import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TokenService } from '../services/token.service';
import { LayoutComponent } from './layout/layout.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [TokenService],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'new',
        component: NewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicServiceRoutingModule {}
