import { Component, OnInit } from '@angular/core';
import { HardcodedAuthincationService } from '../service/hardcoded-authincation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn: boolean=false;
  constructor(public  hardcodedAuthincationService:HardcodedAuthincationService) { }

  ngOnInit(): void {
    this.hardcodedAuthincationService.isUserLoggedIn();
  }

}
