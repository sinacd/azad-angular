import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public service :SharedService) { }
loggedOut(){
  this.service.loginStat=false;
  console.log(this.service.loginStat);
  this.service.ass("undifined") 
}



  ngOnInit(): void {
    console.log(this.service.loginStat);
  }
  title = 'angular10';
}
