import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { JsonServiceService } from '../json-service.service';

@Component({
  selector: 'ngx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public router:Router,public _auth:JsonServiceService) { }
  loginUserData = {
  };

  ngOnInit() {
  }
  nav(){
    this.router.navigate(["/pages/branches"]); 
    }
    loginUser () {
      this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          if(res.status==true){
          localStorage.setItem('token',res.data.auth_token)
          localStorage.setItem('name',res.data.name)
          this.router.navigate(["/pages/branches"]);
          }
          else{
            alert("not correct");
          }
        }) 
    }

}
