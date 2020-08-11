import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../../json-service.service';
import { Employees, emplye } from '../data';

@Component({
  selector: 'ngx-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss']
})
export class ManageEmployeeComponent implements OnInit {
  run=false;
  selectedpay; //for pay dropdrown
  selectedBranch;
  itemNo=3;
  selectedRole;
  public payType= ['Full', 'Hourly'];
  public branchesType= ['Java', 'Angular','.Net'];
  public roleType= ['Admin', 'Employe'];
  public selectItem= [5, 10];
//for toggle
public isCollapsed = true;
public Collapsed = true;
constructor( public service:JsonServiceService ) { }

//for get data to table
public data=[];
public branchesList=[];
// listId={
//   branch_id:'',
//   branch_name:'',
// };
listId;
ngOnInit() {
  // data for employees
  this.service.getEmployeeData().subscribe(filedata => this.data=filedata);
  // data for branches list
  this.service.getBranchData().subscribe(filedata => this.branchesList=filedata);
}

// post data from 
sendData:Employees;
onClickSubmit(employ){

  alert(this.listId);
  
  this.sendData=new Employees();
  this.sendData.branch_id=this.listId;
  this.sendData.name=employ.name;
  this.sendData.email=employ.email;
  this.sendData.address=employ.address;
  this.sendData.pay_type=employ.pay_type;
  this.sendData.hourly_rate=employ.hourly_rate;
  this.sendData.monthly_salary=employ.monthly_salary;
  this.sendData.phone=employ.phone;
  this.sendData.emp_number=employ.emp_number;
  this.sendData.role=employ.role;
  this.sendData.auth_token=localStorage.getItem('token');
  this.sendData.user_id=1;
  this.isCollapsed = true;
  this.service.postEmployeeData(this.sendData).subscribe((res =>{
    this.ngOnInit();
    alert('in responce')

  }));
  //this.ngOnInit();
  this.selectedpay = "";
}

//Edit

public edit={
  branch_id:"",
  emp_id:"",
  name:"",
  email:"",
  address:"",
  pay_type:"",
  hourly_rate:"",
  monthly_salary:"",
  phone:"",
  role:"",
  emp_number:"",
  user_id:"",
  auth_token:"", 
}
onEdit(data){
  this.isCollapsed = true;
    this.Collapsed = false;
    this.edit.branch_id=data.branch_id;
    this.edit.emp_id=data.emp_id;
  this.edit.name=data.name;
  this.edit.email=data.email;
  this.edit.address=data.address;
  this.edit.pay_type=data.pay_type;
  this.edit.hourly_rate=data.hourly_rate;
  this.edit.monthly_salary=data.monthly_salary;
  this.edit.phone=data.phone;
  this.edit.emp_number=data.emp_number;
  alert(data.role);
  this.edit.role=data.role;
  this.edit.user_id="1";
  this.edit.auth_token=localStorage.getItem('token');

}
updateFun(){

  this.service.updateEmployee(this.edit).subscribe();
  this.ngOnInit();
  this.Collapsed = true;
    }
      //deleted
  deleteData:Employees;
  delete_fun(delete_id){
    this.deleteData=new Employees();
    alert(delete_id);
     this.deleteData.emp_id=delete_id;
    this.deleteData.user_id=1;
    this.deleteData.auth_token=localStorage.getItem('token');
    this.service.delete_emp(this.deleteData).subscribe();
    this.ngOnInit();
  
  } 
// for toggle
visiable() {
  this.isCollapsed = !this.isCollapsed;
}
hide() {
  this.isCollapsed = true;
}

//for pay drop down

selectChangeHandler(event: any) {
  //update the ui
  this.selectedpay = event.target.value;
}

selectBranchHandler(event: any) {
  //update the ui
  this.selectedBranch = event.target.value;
}
selectRoleHandler(event: any) {
  //update the ui
  this.selectedRole = event.target.value;
}
selectitem(event:any){
  this.itemNo = event.target.value;
}
selectpay(event:any){
  
}

}
