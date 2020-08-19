import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { nextTick } from 'process';
import { BasicAuthincationService } from '../basic-authincation.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService :BasicAuthincationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'Anupam'
    // let password = '12345678'
    //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    // without hard code data
    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let username  = this.basicAuthService.getAuthenticatedUser();
    if(basicAuthHeaderString && username){
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
  }
    return next.handle(request);
  }

}
