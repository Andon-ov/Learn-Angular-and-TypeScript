import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';

const routes: Routes = [
  { path: '', redirectTo: '/pipes', pathMatch: 'full' },
  { path: 'pipes', component: PipesComponent },
  { path: 'interceptors', component: InterceptorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
