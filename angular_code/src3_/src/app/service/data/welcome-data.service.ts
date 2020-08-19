import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

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
     return  this.httpClient.get<HelloworldBean>(`http://localhost:8080/helloworldbean/path-variable/${name}`);
    }
}
