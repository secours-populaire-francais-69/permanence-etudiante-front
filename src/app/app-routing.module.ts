import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TokenService } from './services/token.service';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forgotten-password',
    component: ForgottenPasswordComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  {
    path: '',
    component: LayoutComponent,
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
