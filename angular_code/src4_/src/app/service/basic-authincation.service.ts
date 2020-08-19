import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHINCATED_USER ='authencateUser';

export class AuthincationBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class BasicAuthincationService {

  constructor(
    private httpClient : HttpClient
  ) { }

  executeAuthicationService(username, password) {
  let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let header = new HttpHeaders({
      Authorization:basicAuthHeaderString
    })
    return  this.httpClient.get<AuthincationBean>(
      `${API_URL}/basicauth`,{headers :header}
      ).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHINCATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
            } 
        )
      );
    }

    getAuthenticatedUser() {
          return sessionStorage.getItem(AUTHINCATED_USER);
    }
    getAuthenticatedToken() {
      if(this.getAuthenticatedUser())
     return  sessionStorage.getItem(TOKEN);
      
    }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHINCATED_USER);
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem(AUTHINCATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}