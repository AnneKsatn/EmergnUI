import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';
import { SystemModule } from './system/system.module';
import { AuthGuard } from './shared/services/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AuthModule,
    AppRoutingModule,
    SystemModule

  ],
  providers: [UsersService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
