import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthincationService } from '../service/hardcoded-authincation.service';
import { BasicAuthincationService } from '../service/basic-authincation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // uname= 'Anupam';
  // pass='';
  uname = 'Anupam';
  pass = '';
  errorMsg = 'Invalid Credentals'
  invalidLogin = false

  //required Router
  //Angular give me Router
  //Dependancy Injection
  constructor(private router:Router,public hardcodeAuth:HardcodedAuthincationService,
    private basicAuthService:BasicAuthincationService
    ) { }
  //constructor(private router:Router) { }

  ngOnInit(): void {
  }
  handleLogin() {
    // hard code data
    //if (this.uname === 'Anupam' && this.pass === '12345678') {
     //if (this.hardcodeAuth.authencate(this.uname,this.pass)) {
      if (this.hardcodeAuth.authencate(this.uname,this.pass)) {
        //redirect to welcome page
      this.router.navigate(['welcome',this.uname])
      this.invalidLogin = false
          } else {
      this.invalidLogin = true
     this.pass = ''
    this.uname = ''
    }
    // console.log(this.uname);
    // console.log(this.pass);
  }


  handleBasicAuthLogin() {
      this.basicAuthService.executeAuthicationService(this.uname,this.pass)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome',this.uname])
          this.invalidLogin = false
        },
        error => {
          console.log(error); 
          this.invalidLogin =true 
          this.pass = ''
          this.uname = ''
        }
      )
  }

}
