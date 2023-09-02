import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { User } from '../user';

@Component({
  selector: 'app-interceptors',
  templateUrl: './interceptors.component.html',
  styleUrls: ['./interceptors.component.css'],
})
export class InterceptorsComponent implements OnInit {
  users: User[] = [];
  constructor(private apiService: ApiServiceService) {}
  ngOnInit(): void {
    this.apiService.loadUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
