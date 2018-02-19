import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json',})
};

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient)  { }

  fetchProfile() {

  }

}
