import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from 'src/app/types/theme';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.css'],
})
export class ThemeContentComponent implements OnInit {
  theme: Theme | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.fetchTheme();
  }

  public get isLogged(): boolean {
    return this.userService.isLogged;
  }

  fetchTheme() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.apiService.getTheme(id).subscribe({
      next: (t) => {
        this.theme = t;
        console.log(t);
      },
      error: (error) => {
        console.error(`Error: ${error}`);
      },
    });
  }
}
