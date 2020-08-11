import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule
} from '@nebular/theme';
import {DatePipe} from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';

import { PagesRoutingModule } from './pages-routing.module';

import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ManageAttendanceComponent } from './manage-attendance/manage-attendance.component';
import { ManageBranchesComponent } from './manage-branches/manage-branches.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ManageSalaryComponent } from './manage-salary/manage-salary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceViewComponent } from './attendance-view/attendance-view.component';
import { AllBranchesReportComponent } from './all-branches-report/all-branches-report.component';


@NgModule({
  imports: [
  
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
  
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbInputModule,
    NbTreeGridModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule 
 
  ],
  declarations: [
    PagesComponent,
    ManageEmployeeComponent,
    ManageAttendanceComponent,
    ManageBranchesComponent,
    ManageSalaryComponent,
    DashboardComponent,
    AttendanceViewComponent,
    AllBranchesReportComponent,
  ],
})
export class PagesModule {
}
