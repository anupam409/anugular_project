import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  msgtitle = 'Welcome to angular js tutorials';
  name =''
  //Activate Route
  constructor(private route:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    console.log(this.msgtitle)
    this.name = this.route.snapshot.params['name']
   // console.log(this.name)
  }

}
