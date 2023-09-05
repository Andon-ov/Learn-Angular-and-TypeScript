import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [FooterComponent, NavComponent, HomeComponent, PageNotFoundComponent, ErrorComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [FooterComponent, NavComponent, HomeComponent, PageNotFoundComponent],
})
export class CoreModule {}
