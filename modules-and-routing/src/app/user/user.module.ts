import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailsResolver } from './user-details/user-details.resolver';

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'user/detail/:id',
        resolve: { user: UserDetailsResolver },
        component: UserDetailsComponent,
      },
    ]),
  ],
  exports: [UserListComponent, UserDetailsComponent],
})
export class UserModule {}
