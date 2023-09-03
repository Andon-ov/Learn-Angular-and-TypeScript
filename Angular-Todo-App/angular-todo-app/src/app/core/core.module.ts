import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FootComponent } from './foot/foot.component';

@NgModule({
  declarations: [NavComponent, FootComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavComponent, FootComponent],
})
export class CoreModule {}
