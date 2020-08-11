import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branches, Employees, emplye, dataget, BranchesSend, atten, viewAtten } from './pages/data';
import { environment } from '../environments/environment';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {
  serverUrl=environment.BaseUrl;
  getUrl=this.serverUrl+"Admin/GetAllEmployee";
  addUrl=this.serverUrl+"Employee/AddNewEmployee";
  
  url = "http://localhost:5555/manage_Branches";
  employee_url = "http://localhost:5555/manage_Employees";
  constructor(public http: HttpClient, private _router: Router) { }
  
 dataa:dataget=new dataget();
  // branches data
  getBranchData(): Observable<Branches[]> {
    this.dataa.user_id=1;
 this.dataa.auth_token=localStorage.getItem('token');
    return this.http.post<Branches[]>(this.serverUrl+"Admin/GetAllBranch",this.dataa);
  }

   postBranchData(postData) {
     return this.http.post(this.serverUrl+"Admin/AddNewBranch",postData)
 }
 update(obj:any):Observable<BranchesSend[]>{

  return this.http.post <BranchesSend[]>(this.serverUrl+"Admin/UpdateBranch",obj);
 }
 delete_branches(del){
  return this.http.post(this.serverUrl+"Admin/DeleteBranchById",del);
 }
//employe management
getEmp:dataget=new dataget();
getEmployeeData(): Observable<Employees[]> {
  this.getEmp.user_id=1;
 this.getEmp.auth_token=localStorage.getItem('token');
  return this.http.post<Employees[]>(this.serverUrl+"Admin/GetAllEmployee",this.getEmp);
}


 postEmployeeData(postData) {
   return this.http.post(this.serverUrl+"Admin/AddNewEmployee",postData)
}
updateEmployee(obj:any):Observable<Employees[]>{

  return this.http.post<Employees[]>(this.serverUrl+"Admin/UpdateEmployee",obj);
 }
 delete_emp(del){
  return this.http.post(this.serverUrl+"Admin/DeleteEmployeeById",del);
 }

 // ATTendence

 //getAllEmplylist by catogery
 getForAttendence(data):Observable<atten[]>{
  return this.http.post<atten[]>(this.serverUrl+"Admin/GetEmployeesByBranchId",data);
 }
 //post AttendanceLog
 postAttendance(postData) {
  return this.http.post(this.serverUrl+"Admin/LogAttendanceByBranch",postData)
}
//get Attandancece-View
getViewAttandance(data):Observable<viewAtten[]>{
  return this.http.post<viewAtten[]>(this.serverUrl+"Admin/GetAttendByDateBranch",data);
 }
//update attendance
updateAttendance(postData) {
  return this.http.post(this.serverUrl+"Admin/UpdateAttendanceById",postData)
}


 //dummy employee for api

 data:dataget=new dataget();

 getEmployeData(): Observable<emplye[]> {
 this.data.user_id=1;
 this.data.auth_token=localStorage.getItem('token');

  return this.http.post<emplye[]>(this.getUrl,this.data);
}
 postEmployeData(postData: emplye) {
   alert(postData.first_name);
   return this.http.post(this.addUrl,postData)
}

// for sign in
loginUser(user) {
  return this.http.post<any>(this.serverUrl+"Admin/LoginUserAdmin", user)
}

// logoutUser() {
//   localStorage.removeItem('token')
//   this._router.navigate(['/events'])
// }

getToken() {
  return localStorage.getItem('token')
}

loggedIn() {
  return !!localStorage.getItem('token')    
}
logoutUser() {
  localStorage.removeItem('token')
  this._router.navigate(['/signin'])
}
getName(){
  return localStorage.getItem('name');
}

}
