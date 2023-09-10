import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';

const routes: Routes = [
  { path: '', redirectTo: 'example-one', pathMatch: 'full' },
  { path: 'example-one', component: ExampleOneComponent },
  { path: 'example-two', component: ExampleTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
