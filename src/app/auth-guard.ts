import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { UserService, AuthResponseStatus } from "./user.service";
import { NotificationService } from "./notification.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: UserService, private notification: NotificationService) {}

  canActivate() {
    if(!this.authService.isTokenExpired()) {
      this.authService.isLoggedIn = true;
      this.authService.authStatus = AuthResponseStatus.SIGNED_IN;
      this.notification.postMessage('Info alert', 'User successfully signed in!');
      return true;
    }

    this.authService.isLoggedIn = false;
    this.authService.authStatus = AuthResponseStatus.SESSION_EXPIRED;
    this.notification.postMessage('Info alert', 'Your session has expired. kindly login..!');
    this.router.navigate(['system/authentication/login']);
    return false;
  }

}
