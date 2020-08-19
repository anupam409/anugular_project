import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  msgtitle = 'Welcome to angular js tutorials';
  name = ''
  welcomeMesageFromService:string
  //Activate Route
  constructor(private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) {

  }

  ngOnInit(): void {
    console.log(this.msgtitle)
    this.name = this.route.snapshot.params['name']
    // console.log(this.name)
  }

  getWelcomeMessage() {
    //this.welcomeDataService.executeHelloWorldBeanService().subscribe();
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      //response => this.handleSuccessfulResponse(response)
      //
      //response => console.log(response.message)
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("last line of get welcome message");
  }

  getWelcomeMessageWithParameter() {
    //this.welcomeDataService.executeHelloWorldBeanService().subscribe();
    this.welcomeDataService.executeHelloWorldBeanWithPathVariableService(this.name).subscribe(
      //response => this.handleSuccessfulResponse(response)
      //
      //response => console.log(response.message)
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
   // console.log("last line of get welcome message");
  }

  handleErrorResponse(error){
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMesageFromService = error.error.message;
  }
  handleSuccessfulResponse(response) {
    this.welcomeMesageFromService = response.message;
    console.log(response);
    console.log(response.message);
  }

}
