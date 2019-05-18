import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    HomePageComponent,
    LoginPageComponent,
    SignUpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
