import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { ThemeComponent } from './theme/theme.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeAndPostComponent } from './theme-and-post/theme-and-post.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostsComponent,
    ThemeComponent,
    ThemeContentComponent,
    NewThemeComponent,
    ThemeAndPostComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, FormsModule],
  exports: [PostsComponent, ThemeComponent],
})
export class ThemeAndPostModule {}
