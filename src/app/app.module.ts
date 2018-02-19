import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PersonFormComponentComponent } from './person-form-component/person-form-component.component';
import { UserService } from './user.service';
import { ProfileComponent } from './profile/profile.component';
import { AuthRequestOptions } from './auth-request';
import { AuthGuard } from './auth-guard';
import { AuthErrorHandler } from './auth-error-handler';
import { NotificationService } from './notification.service';
import { LogoutComponent } from './logout/logout.component';
import { NotificationComponent } from './notification/notification.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'system/authenticated/user/profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'system/authentication/login', component: LoginComponent },
  { path: 'system/authentication/logout', component: LogoutComponent },
  { path: 'system/authentication/registration', component: RegistrationComponent },
  //{ path: '**', component: PageNotFoundComponen }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PersonFormComponentComponent,
    ProfileComponent,
    LogoutComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: true }
    ),
  ],
  providers: [HttpClientModule, UserService, AuthGuard, NotificationService,
    { provide: RequestOptions, useClass: AuthRequestOptions},
    { provide: ErrorHandler, useClass: AuthErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
