import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgRxComponent } from './ng-rx/ng-rx.component';
import { StoreModule } from '@ngrx/store';
import { TranslateComponent } from './translate/translate.component';
import { translateReducer } from './translate/translate.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostComponent } from './post/post.component';
import { postReducer } from './post/post.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NgRxComponent,
    TranslateComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({
      message: translateReducer,
      post: postReducer as any,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
