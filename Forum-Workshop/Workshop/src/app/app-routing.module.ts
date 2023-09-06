import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NewThemeComponent } from './theme-and-post/new-theme/new-theme.component';
import { AuthActivate } from './core/guards/auth.activate';
import { ThemeAndPostComponent } from './theme-and-post/theme-and-post/theme-and-post.component';
import { ThemeContentComponent } from './theme-and-post/theme-content/theme-content.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'themes', component: ThemeAndPostComponent },
  { path: 'themes/:id', component: ThemeContentComponent },
  { path: 'auth', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
  { path: 'error', component: ErrorComponent },
  // { path: '**', pathMatch: 'full', component: PageNotFoundComponent },

  {
    path: 'new-theme',
    component: NewThemeComponent,
    canActivate: [AuthActivate],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
