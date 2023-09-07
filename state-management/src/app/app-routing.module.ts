import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgRxComponent } from './ng-rx/ng-rx.component';

const routes: Routes = [
  { path: '', redirectTo: 'ng-rx', pathMatch: 'full' },
  { path: 'ng-rx', component: NgRxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
