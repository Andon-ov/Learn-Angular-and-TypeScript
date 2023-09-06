import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { AppEmailDirective } from './validators/app-email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';

@NgModule({
  declarations: [LoaderComponent, WelcomeComponent, AppEmailDirective, SlicePipe, ElapsedTimePipe],
  imports: [CommonModule, RouterModule],
  exports: [LoaderComponent, WelcomeComponent, AppEmailDirective, SlicePipe, ElapsedTimePipe],
})
export class SharedModule {}
