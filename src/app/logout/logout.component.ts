import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NotificationService, AlertType } from '../notification.service';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private authService: UserService, private router: Router, private notification: NotificationService) { }

  ngOnInit() {
    this.authService.signOut().subscribe(() => {
      // move to the login page
      this.notification.postMessage('info alert', 'Successfully Signed Out!', AlertType.SUCCESS);
      this.router.navigate(['system/authentication/login']);
    });
  }

}
