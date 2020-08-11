import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../../json-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-all-branches-report',
  templateUrl: './all-branches-report.component.html',
  styleUrls: ['./all-branches-report.component.scss']
})
export class AllBranchesReportComponent implements OnInit {
  public branchesList=[];
  constructor(public service:JsonServiceService , private datePipe: DatePipe) { 
    
  }
  curDate= this.datePipe.transform(new Date(),"yyyy-MM-dd");
  ngOnInit() {
    this.service.getBranchData().subscribe(filedata => this.branchesList=filedata);
  }

}
