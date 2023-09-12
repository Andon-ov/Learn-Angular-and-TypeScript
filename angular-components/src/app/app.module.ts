import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { ExampleOneComponent } from './example-one/example-one.component';
import { AppRoutingModule } from './app-routing.module';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { GameItemComponent } from './game-item/game-item.component';

@NgModule({
  declarations: [AppComponent, ExampleOneComponent, ExampleTwoComponent, GameItemComponent],
  imports: [BrowserModule, RouterModule, CoreModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
