import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';

import * as jwt_decode from 'jwt-decode';

export const TOKEN_NAME = 'jwt_token';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json',})
};

export enum AuthResponseStatus { SESSION_EXPIRED = 0, FRESH_USER = 1, SIGNED_IN = 2}

@Injectable()
export class UserService {

  public isLoggedIn: boolean = false;
  public authStatus: AuthResponseStatus = AuthResponseStatus.FRESH_USER;
  public static API: string = 'http://localhost/apps/api.intigradhost.com/';
  constructor(private http: HttpClient) { }

  // login user
  authenticateUser(userDetails: User) {
    let username: string = userDetails.username;
    let password: string = userDetails.password;

    return this.http.post<any>(UserService.API + 'api/authentication/login', JSON.stringify({username: username, password: password}));
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(param: string) {
    localStorage.setItem(TOKEN_NAME, param);
  }

  signOut() {
    localStorage.clear();
    return this.http.get(UserService.API + 'api/authentication/logout');
  }

  getTokenExiprationDate(token: string): Date {
    let decoded = jwt_decode(token);

    if(decoded['exp'] === undefined) return null;
    const date: Date = new Date(0);
    date.setUTCSeconds(decoded['exp']);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExiprationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

}
