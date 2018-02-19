import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { Booking } from '../models/Booking';
import { RegistrationFormError } from '../models/RegistrationFormError';
import { PersonFormComponentComponent } from '../person-form-component/person-form-component.component';
import { User } from '../models/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  public title: string = "Sign Up";
  public isRegistrantSame: boolean = true;
  public booking: Booking;


  formSubmitted: boolean = false;
  formValid: boolean = false;
  error: User;

  formSubmitBtnClicked: EventEmitter<boolean>;

  @ViewChild('personChild') personChild:PersonFormComponentComponent;
  @ViewChild('domainRegistrantChild') domainRegistrantChild:PersonFormComponentComponent;

  constructor() {
    this.booking = new Booking();
    this.formSubmitBtnClicked = new EventEmitter<boolean>();
    this.error = new User();
  }

  registrantAvailablilityChange(): void {
    this.isRegistrantSame = this.isRegistrantSame ? false : true;
  }

  checkUserForm(): boolean {
    this.error.password = (this.booking.user.password.trim().length <= 0) ? 'enter password' : '';
    this.error.username = (this.booking.user.username.trim().length <= 0) ? 'enter username / email' : '';

    return !(this.error.password || this.error.username);
  }


  saveClicked() {
    // check registration form
    this.formSubmitted = true;
    console.log(this.error);

    this.formValid = this.personChild.checkFormIsValid() && this.checkUserForm();

    if(!this.isRegistrantSame) {
      this.formValid = this.formValid && this.domainRegistrantChild.checkFormIsValid();
    }

    console.log(this.formValid, this.booking);
  }

  ngOnInit() {
  }

}
