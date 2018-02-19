import { Component, OnInit } from '@angular/core';
import { Person } from '../models/Person';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public person: Person;

  constructor(private authService: UserService, private router: Router) {
    this.person = new Person();
  }

  ngOnInit() { }

}
