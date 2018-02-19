import { Person } from "./Person";
import { User } from "./User";

export class RegistrationFormError {
  public personError: Person;
  public domainRegistrantError: Person;
  public userError: User;

  constructor() {
    this.personError = new Person();
    this.domainRegistrantError = new Person();
    this.userError = new User();
  }
}
