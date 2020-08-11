import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../../json-service.service';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
//import { MatSelect } from '@angular/material/select';
@Component({
  selector: 'ngx-manage-attendance',
  templateUrl: './manage-attendance.component.html',
  styleUrls: ['./manage-attendance.component.scss']
})
export class ManageAttendanceComponent implements OnInit {
  
  currTime= this.datePipe.transform(new Date(), 'HH:mm');
  status= ['present', 'absent','leave'];
  listId;
   curDate=new Date();
  field="IT";
  name="Abdul";
  public isCollapsed = false;
  countries: string[] = ['present', 'absent','leave'];
default: string = 'present';

countryForm: FormGroup;
  // for toggle
visiable() {
  this.isCollapsed = !this.isCollapsed;
}
hide() {
  this.isCollapsed = true;
}
constructor( public service:JsonServiceService,private datePipe: DatePipe,private fb: FormBuilder ) { 
 
}

//store branch-list
public branchesList=[];

  ngOnInit() {
    //get branch-list
    this.service.getBranchData().subscribe(filedata => this.branchesList=filedata);
   
    //for reactive form tes
  
 


  }
  //selected branch get-data
  list={
    branch_id:'',
    user_id:'',
    auth_token:'',
  }

 public attendanceData:any={
  data:[]
 };
  selectList(event:any){
this.list.branch_id=this.listId;
this.list.user_id="1";
this.list.auth_token=localStorage.getItem('token');
this.service.getForAttendence(this.list).subscribe(res=>{
  this.attendanceData=res
 

}
);

 


  }
  attendance={
    user_id:'',
    branch_id:'',
    auth_token:'',
    // date:'',
   tags:[],
  }
  onClickSubmit(f){
    this.attendance.user_id="1";
    this.attendance.branch_id=this.listId;
    this.attendance.auth_token=localStorage.getItem('token');
    this.attendance.tags = Object.keys(f.value).map(item => {
      return f.value[item];
    }); 
    console.log(this.attendance);
  }
  Arr = Array; //Array type captured in a variable
  num:number = 0;
ids=[];
ie=true;
  my(id){

    alert(id);
    this.num=1;
    this.ids.push(id);
    console.log(this.ids);
  }





}