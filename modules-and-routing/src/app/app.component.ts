import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpinnerService } from './shared/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'modules-and-routing';

  constructor(
    public spinnerService: SpinnerService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.spinnerService.showLoader();
    this.changeDetectorRef.detectChanges();
  }
}
