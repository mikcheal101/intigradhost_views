import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../models/Person';

@Component({
  selector: 'app-person-form-component',
  templateUrl: './person-form-component.component.html',
  styleUrls: ['./person-form-component.component.css']
})
export class PersonFormComponentComponent implements OnInit {

  @Input('person') person: Person;
  error: Person;
  submitted: boolean = false;

  constructor() {
    this.error = new Person();
  }

  checkFormIsValid():boolean {
    this.submitted          = true;
    this.error.city         = (this.person.city.trim().length <= 0) ? 'enter a city' : ''
    this.error.country      = (this.person.country.trim().length <= 0) ? 'enter a country' : ''
    this.error.email        = (this.person.email.trim().length <= 0) ? 'enter a valid email' : ''
    this.error.firstname    = (this.person.firstname.trim().length <= 0) ? 'enter firstname' : ''
    this.error.lastname     = (this.person.lastname.trim().length <= 0) ? 'enter lastname' : ''
    this.error.phoneNumber  = (this.person.phoneNumber.trim().length <= 0) ? 'enter phone number' : ''
    this.error.postcode     = (this.person.postcode.trim().length <= 0) ? 'enter postcode' : ''
    this.error.state        = (this.person.state.trim().length <= 0) ? 'enter state' : ''
    this.error.streetAddress     = (this.person.streetAddress.trim().length <= 0) ? 'enter street address' : ''
    this.error.streetAddressTwo  = (this.person.streetAddressTwo.trim().length <= 0) ? 'enter street address (2)' : '';

    return (this.error.city || this.error.country || this.error.email || this.error.firstname || this.error.lastname
      || this.error.phoneNumber || this.error.postcode || this.error.state || this.error.streetAddress || this.error.streetAddressTwo) ? false: true;
  }

  ngOnInit() {
  }

}
