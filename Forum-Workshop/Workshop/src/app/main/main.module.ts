import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { PostsComponent } from './posts/posts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ThemeComponent, PostsComponent],
  imports: [CommonModule, SharedModule],
  exports: [ThemeComponent, PostsComponent],
})
export class MainModule {}
