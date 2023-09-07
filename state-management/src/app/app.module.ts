import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgRxComponent } from './ng-rx/ng-rx.component';
import { StoreModule } from '@ngrx/store';
import { TranslateComponent } from './translate/translate.component';
import { translateReducer } from './translate/translate.reducer';

@NgModule({
  declarations: [AppComponent, NgRxComponent, TranslateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({ message: translateReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
