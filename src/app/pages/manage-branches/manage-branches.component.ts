import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../../json-service.service';
import { Branches, BranchesSend, BrancheDelete } from '../data';

@Component({
  selector: 'ngx-manage-branches',
  templateUrl: './manage-branches.component.html',
  styleUrls: ['./manage-branches.component.scss']
})
export class ManageBranchesComponent implements OnInit {
  //for toggle
  public isCollapsed = true;
  public Collapsed = true;
  constructor( public service:JsonServiceService ) { }
f=1;
  //get data from table
 public data=[];
  ngOnInit() {
    this.service.getBranchData().subscribe(filedata => this.data=filedata);
  }
  //dropdown pagination
  itemNo=3;
  public selectItem= [5, 10];
  selectitem(event:any){
    this.itemNo = event.target.value;
  }

  // post data from 
  sendData:BranchesSend;
  onClickSubmit(employ){
    this.sendData=new BranchesSend();
    this.sendData.branch_name=employ.branchName;
    this.sendData.branch_code=employ.branchCode;
    this.sendData.branch_address=employ.Address;
    this.sendData.auth_token=localStorage.getItem('token');
    this.sendData.user_id=1;
    this.isCollapsed = true;
    console.log(this.sendData);
    console.log(JSON.stringify(this.sendData));

    this.service. postBranchData(this.sendData).subscribe((res=>{

      this.ngOnInit();

      
    }))

  }
  // edit

//edit object
edit={
  branch_id:"",
  branch_name:"",
  branch_code:"",
  branch_address:"",
  user_id:"",
  auth_token:"",
} 
  // edit function
  editfunction(data){
    
    this.isCollapsed = true;
    this.Collapsed = false;
    
    this.edit.branch_id=data.branch_id;
    this.edit.branch_name=data.branch_name;
    this.edit.branch_code=data.branch_code;
    this.edit.branch_address=data.branch_address;
    this.edit.user_id="1";
    this.edit.auth_token=localStorage.getItem('token');
  }
  //update function
  updateFun(){

this.service.update(this.edit).subscribe();
this.ngOnInit();
this.Collapsed = true;
  }

  //deleted
  deleteData:BrancheDelete;
  delete_fun(delete_id){
    this.deleteData=new BrancheDelete();
    alert(delete_id);
    this.deleteData.branch_id=delete_id;
    this.deleteData.user_id=1;
    this.deleteData.auth_token=localStorage.getItem('token');
    this.service.delete_branches(this.deleteData).subscribe();
    this.ngOnInit();
    

  } 

  // for toggle
  
  visiable() {
    this.isCollapsed = !this.isCollapsed;
  }
  hide() {
    this.isCollapsed = true;
  }


 

}
