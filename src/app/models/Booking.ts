import { Person } from "./Person";
import { User } from "./User";

export class Booking {
  public person: Person;
	public user;
  public domainRegistrant: Person;

  constructor() {
    this.domainRegistrant = new Person();
    this.domainRegistrant.personType = 'Domain Registrant';
    this.person = new Person();
    this.user = new User();
  }


}
