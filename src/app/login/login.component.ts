import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/User';
import { NotificationService, AlertType } from '../notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  error: User;
  isValid: boolean;
  submitted: boolean;

  constructor(private _userService: UserService, private notification: NotificationService, private router: Router) {
    this.user = new User();
    this.error = new User();
    this.isValid = false;
    this.submitted = false;
  }

  ngOnInit() { }

  checkForm():void {
    this.error.username = (this.user.username.trim().length > 0) ? '' : 'enter username / email';
    this.error.password = (this.user.password.trim().length > 0) ? '' : 'enter password';
    this.isValid = (this.error.username || this.error.password) ? false : true;
  }

  authenticateUser() {
    this.submitted = true;
    this.checkForm();
    if(this.isValid) {
      this._userService
        .authenticateUser(this.user).subscribe(
          data => {
            this._userService.setToken(data.id_token);
          },
          err => {
            if(err.error['invalid']) {
              this.notification.clearMessage();
              this.notification.postMessage('Info alert', 'User ' + err.error.invalid + ' does not exist or Password Mismatch!', AlertType.ERROR);
            }
            console.log(err);
          },
          () => {
            this.router.navigate(['system/authenticated/user/profile']);
          }
        );
    }
  }
}
