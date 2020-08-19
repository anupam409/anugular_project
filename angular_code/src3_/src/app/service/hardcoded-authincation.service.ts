import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthincationService {

  constructor() { }
  authencate(username, password) {
     //console.log('before > '+this.isUserLoggedIn());
    if (username === 'Anupam' && password === '12345678') {
      sessionStorage.setItem('authencateUser', username);
     //console.log('after > '+this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authencateUser');
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem("authencateUser");
  }
}