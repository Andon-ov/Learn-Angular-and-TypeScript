import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HighlightOnMoveDirective } from './highlight-on-move.directive';
import { DirectivesComponent } from './directives/directives.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { MyStructuralDirectiveDirective } from './my-structural-directive.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HighlightOnMoveDirective,
    DirectivesComponent,
    LoginComponent,
    RegisterComponent,
    MyRouterLinkDirective,
    MyStructuralDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule, // Template-driven Form
    ReactiveFormsModule, //Reactive Forms
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
