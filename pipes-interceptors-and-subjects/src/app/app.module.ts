import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PipesComponent } from './pipes/pipes.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { HttpClientModule } from '@angular/common/http';
import { ReducePipe } from './reduce.pipe';
import { AppInterceptor, AppInterceptorProvider } from './app.Interceptor';
import { LazyModule } from './lazy/lazy.module';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    InterceptorsComponent,
    ReducePipe,
    SubjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    LazyModule,
  ],
  providers: [AppInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
