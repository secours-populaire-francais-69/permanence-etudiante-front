import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenService } from './services/token.service';
import { InnerLayoutComponent } from './layouts/inner-layout.component';

const routes: Routes = [
  {
    path: '',
    component: InnerLayoutComponent,
    canActivate: [TokenService],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./basic-service/basic-service.module').then(
            (m) => m.BasicServiceModule
          ),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./event/event.module').then((m) => m.EventModule),
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('./post/post.module').then((m) => m.PostModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
