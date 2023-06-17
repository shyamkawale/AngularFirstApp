import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { UserformComponent } from './userform/userform.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    UserformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule // as we need to enable ngModel directive(for Two Way Data Binding)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
