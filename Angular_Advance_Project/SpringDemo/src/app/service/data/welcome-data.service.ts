import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { API_URL } from 'src/app/app.constants';

export class HelloworldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  executeHelloWorldBeanService() {
  //return  this.httpClient.get<HelloworldBean>('http://localhost:8080/helloworldbean/path-variable/anupam');
   // console.log("Excute Hello world Bran Service");
   return  this.httpClient.get<HelloworldBean>('http://localhost:8080/helloworldbeans');
  }
  executeHelloWorldBeanWithPathVariableService(name) {
    //return  this.httpClient.get<HelloworldBean>('http://localhost:8080/helloworldbean/path-variable/anupam');
     // console.log("Excute Hello world Bran Service");
    // return  this.httpClient.get<HelloworldBean>(`http://localhost:8080/helloworldbean/path-variable/${name}`);
    /*
    for Basic Authication with hard core data 
    
    let basicAuthHeaderString = this.createBasicAuthencationHttpHeader();
    let header = new HttpHeaders({
      Authorization:basicAuthHeaderString
    })
    return  this.httpClient.get<HelloworldBean>(
      `http://localhost:8080/helloworldbean/path-variable/${name}`,{headers :header}
      );
   */
  // for Basic Authication without hard core data
  return  this.httpClient.get<HelloworldBean>(
    `${API_URL}/helloworldbean/path-variable/${name}`
    );

    }

    // for basic authication hardcoard data
    createBasicAuthencationHttpHeader(){
   let username = 'Anupam'
   let password = '12345678'
   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
   return basicAuthHeaderString;


    }
}
