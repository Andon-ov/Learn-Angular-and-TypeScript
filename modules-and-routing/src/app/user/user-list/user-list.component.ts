import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../../types/user';
import { UserService } from '../user.service';
import { SpinnerService } from 'src/app/shared/spinner/spinner.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.showLoader();

    setTimeout(() => {
      this.userService.fetchUsers().subscribe({
        next: (users) => {
          this.users = users;
          this.spinnerService.hideLoader();
        },
        error: (error) => {
          console.error(error);
          this.spinnerService.hideLoader();
        },
      });
    }, 3000);
  }
}

// when we export info
// export class UserListComponent {
//   @Input() users: User[] = [];
// }
