// import { Injectable, Injector } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
// import { JsonServiceService } from './json-service.service';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class TokenIntercepterService implements HttpInterceptor {

//   constructor(public auth:JsonServiceService){}
  
//   intercept(auth_token : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>> 
//   {
//       // add authorization header with jwt token if available
//       let currentuser = this.auth.loggedIn;
//       let token = localStorage.getItem('token');
      

//       if (currentuser()) 
//       {
//         auth_token = auth_token.clone({
//               setHeaders: 
//               {
//                    Authorization: `Bearer ${token}` 
                  
//               }
//           });
//       }

//       return next.handle(auth_token);
//   }
// }
