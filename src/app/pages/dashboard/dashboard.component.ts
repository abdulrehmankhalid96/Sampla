import { Component, OnInit } from '@angular/core';
import { userModel } from '../data';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   usermodel= { 
    name:"", 
    topic:"ahsan" 
 }; 
  topics=["ali","ahsan"]
onSubmit(na){
  alert(na.topic);
}

}
