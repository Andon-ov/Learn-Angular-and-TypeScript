import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; // Import the main component
import { UsersListComponent } from './users-list/users-list.component'; // Import the users list component
import { UsersListItemComponent } from './users-list-item/users-list-item.component'; // Import the users list item component
import { UserService } from './user.service'; // Import the user service
import { HttpClientModule } from '@angular/common/http'; // Import the HTTP CLient to use
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, UsersListComponent, UsersListItemComponent], // Declare your components here
  imports: [BrowserModule, HttpClientModule, CoreModule, AppRoutingModule], // Import modules that this module needs

  // This is a second options but prefer/ first is a @Injectable({providedIn: 'root',})
  providers: [UserService], // Provide services that components within this module might need
  // It may also not be here but in a component of our choice, but the service will only be provided while the component is alive

  // So, to sum it up, you have the flexibility to provide services at both the module level and the component level,
  // depending on the scope you want for your service instances. If you want a service to be shared across multiple
  // components within a module, you use the module's providers array. If you want a service to be specific to a component
  // and its children, you provide it in the component's providers array.

  bootstrap: [AppComponent, AppRoutingModule], // Bootstrap component that will be loaded when the app starts
})
export class AppModule {}
