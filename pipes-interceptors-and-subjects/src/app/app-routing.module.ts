import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';

const routes: Routes = [
  { path: '', redirectTo: '/pipes', pathMatch: 'full' },
  { path: 'pipes', component: PipesComponent },
  { path: 'interceptors', component: InterceptorsComponent },
  {
    path: 'lazy-loading',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // ! Preload All Modules - do not use lazy
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),

    // ! Best option for debugging
    // RouterModule.forRoot(routes, {
    //   enableTracing: true,
    // }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
