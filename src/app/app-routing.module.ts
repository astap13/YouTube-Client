import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { AdminPageComponent } from './youtube/pages/admin-page/admin-page.component';
import { DetealedPageComponent } from './youtube/pages/detealed-page/detealed-page.component';
import { ErrorPageComponent } from './youtube/pages/error-page/error-page.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: 'core', loadChildren: () => import('./core/core.module').then((m) => m.CoreModule) },
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [AuthGuard],
  },
  { path: 'youtube/:id', component: DetealedPageComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorPageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
