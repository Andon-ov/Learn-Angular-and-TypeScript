import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { User } from '../user';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  users: User[] = [];

  euro: number = 100;

  numbers: number[] = [1, 2, 3, 4, 5.5];

  p = new Promise((resolve) => {
    setTimeout(() => {
      resolve(100);
    }, 300);
  });

  time$ = interval(1000).pipe(map(() => new Date()));

  sum(a: number, b: number): number {
    return a + b;
  }
  constructor(private apiService: ApiServiceService) {}
  ngOnInit(): void {
    this.apiService.getUsers().then((u) => (this.users = u));
  }
}
