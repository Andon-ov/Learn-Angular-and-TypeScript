import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [NavComponent, PagenotfoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavComponent, PagenotfoundComponent],
})
export class CoreModule {}
