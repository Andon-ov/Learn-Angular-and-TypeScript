import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NewThemeComponent } from './theme-and-post/new-theme/new-theme.component';
import { AuthActivate } from './core/guards/auth.activate';
import { ThemeAndPostComponent } from './theme-and-post/theme-and-post/theme-and-post.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'themes', component: ThemeAndPostComponent },
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
