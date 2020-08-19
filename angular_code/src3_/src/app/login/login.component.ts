import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthincationService } from '../service/hardcoded-authincation.service';

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
  constructor(private router:Router,public hardcodeAuth:HardcodedAuthincationService) { }
  //constructor(private router:Router) { }

  ngOnInit(): void {
  }
  handleLogin() {
    //if (this.uname === 'Anupam' && this.pass === '12345678') {
     if (this.hardcodeAuth.authencate(this.uname,this.pass)) {
      this.invalidLogin = false
      this.router.navigate(['welcome',this.uname])
    } else {
      this.invalidLogin = true
  
    }
    this.pass = ''
    this.uname = ''
    // console.log(this.uname);
    // console.log(this.pass);
  }
}
