export class Person {

  public id:number = 0;
  public firstname: string;
	public lastname: string;
	public email: string;
	public phoneNumber: string;
	public companyName: string;
	public streetAddress: string;
	public streetAddressTwo: string;
	public city: string;
	public state: string;
	public postcode: string;
	public country: string;
  public personType:string;

  constructor() {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.phoneNumber = '';
    this.companyName = '';
    this.streetAddress = '';
    this.streetAddressTwo = '';
    this.city = '';
    this.state = '';
    this.postcode = '';
    this.country = '';
    this.personType = 'Normal Person';
  }
}
