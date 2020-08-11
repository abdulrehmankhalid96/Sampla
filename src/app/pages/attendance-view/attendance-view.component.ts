import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../../json-service.service';
import { DatePipe } from '@angular/common';
import { namee, updateAtten } from '../data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-attendance-view',
  templateUrl: './attendance-view.component.html',
  styleUrls: ['./attendance-view.component.scss']
})
export class AttendanceViewComponent implements OnInit {
  status= ['present', 'absent'];
  listId;


  field= 'IT';
  name= 'Abdul';
  public isCollapsed = true;
  // for toggle

visiable() {
  this.isCollapsed = !this.isCollapsed;
}
hide() {
  this.isCollapsed = true;
}
constructor( public service: JsonServiceService , private datePipe: DatePipe ) { }
curDate= this.datePipe.transform(new Date(), 'yyyy-MM-dd');

submitt(data){
  alert('naeem');
  alert(data.emp_id);
}

// store branch-list
public branchesList= [];

  ngOnInit() {
    // get branch-list
    this.service.getBranchData().subscribe(filedata => this.branchesList = filedata);
  }
  // selected branch get-data

  list= {
    branch_id: '',
    user_id: '',
    auth_token: '',
    date: '',
  }
 public attendanceData= [];
  selectList(event: any){
    if (this.listId != undefined){
this.list.branch_id = this.listId;
this.list.user_id = '1';
this.list.auth_token = localStorage.getItem('token');
this.list.date = this.dated;

this.service.getViewAttandance(this.list).subscribe(filedata => {
   this.attendanceData = filedata;


  }
   );
    }
  }

  dated= this.curDate;
  selectDate(event){
    this.dated = event.target.value;
this.selectList(event);
  }

  updateVal: updateAtten= new updateAtten();

  update(data){


    this.updateVal.user_id = '1';
    this.updateVal.branch_id = this.listId;
    this.updateVal.auth_token = localStorage.getItem('token');
    this.updateVal.status = data.status;
    this.updateVal.attend_id = data.attend_id;


  this.service.updateAttendance(this.updateVal).subscribe((res => {

  console.log('good');


 }))
  }


}
