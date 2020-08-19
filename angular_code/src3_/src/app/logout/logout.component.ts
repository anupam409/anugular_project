import { Component, OnInit } from '@angular/core';
import { HardcodedAuthincationService } from '../service/hardcoded-authincation.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthincationService : HardcodedAuthincationService) { }

  ngOnInit(): void {
    this.hardcodedAuthincationService.logout();
  }

}
