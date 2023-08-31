import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css'],
})
export class NewThemeComponent {
  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  newThemeFormHandler(form: NgForm) {
    const value: { themeName: string; postText: string } = form.value;

    this.apiService.createTheme(value.themeName, value.postText).subscribe(
      (response) => {
        const newThemeId = response._id;
        this.router.navigate(['/themes', newThemeId]);
      },
      (error) => {
        console.error('Error creating theme:', error);
      },
    );
  }
  cancelBtnHandler(form: NgForm) {
    form.reset();
  }
}
