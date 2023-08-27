import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent implements OnInit {
  themes: Theme[] = [];
  isLoading: boolean = true;

  constructor(
    private apiService: ApiService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.fetchThemes();
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  fetchThemes() {
    this.apiService.getThemes().subscribe({
      next: (t) => {
        this.themes = t;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      },
    });
  }
}
