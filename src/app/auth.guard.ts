import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JsonServiceService } from './json-service.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: JsonServiceService,
     private _router: Router) { }

   canActivate(): boolean {
     if (this._authService.loggedIn()) {
       console.log('true')
       return true
     } else {
       console.log('false')            
      this._router.navigate(['/signin'])
      return false
    }
  }
}
