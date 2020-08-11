import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../../json-service.service';
import { emplye } from '../data';

@Component({
  selector: 'ngx-manage-salary',
  templateUrl: './manage-salary.component.html',
  styleUrls: ['./manage-salary.component.scss']
})
export class ManageSalaryComponent implements OnInit {

  empt = [];
  constructor(public service: JsonServiceService) {
  }
  ngOnInit() {

    // let userid=1;
    // let token=localStorage.getItem('token');
    this.service.getEmployeData().subscribe(data => this.empt = data);
  }
  public catagorey = ['Collector', 'Sr.Collector', 'Collection Manager', 'Account Manager', 'Office Admin', 'Sales'];
  public pay = ['Full', 'Hourly'];
  public isCollapsed = true;
  searchText;
  selectedpay;
  selected_emp_type;
  box: emplye;
  onClickSubmit(data) {
    this.box = new emplye();
    this.box.first_name = data.firstname;
    this.box.last_name = data.lastname;
    this.box.sin_no = data.SIN;
    this.box.address = data.Address;
    this.box.pay_type = this.selectedpay
    this.box.hourly_rate= data.Rate;
    this.box.yearly_salary = data.Yearly
    this.box.phone_number = data.phoneNumber;
    this.box.employee_category = this.selected_emp_type;


    
    this.service.postEmployeData(this.box).subscribe((res: emplye) => {
      this.ngOnInit();
    });
    this.isCollapsed = true;
    this.selectedpay = "";
    this.selected_emp_type = "";

  }

  selectChangeHandler(event: any) {
    //update the ui
    this.selectedpay = event.target.value;
  }
  selectChange(event: any) {
    this.selected_emp_type = event.target.value;
  }
  visiable() {
    this.isCollapsed = !this.isCollapsed;
  }
  hide() {
    this.isCollapsed = true;
  }

}
