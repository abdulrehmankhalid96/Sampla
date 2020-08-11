import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ManageAttendanceComponent } from './manage-attendance/manage-attendance.component';
import { ManageBranchesComponent } from './manage-branches/manage-branches.component';
import { ManageSalaryComponent } from './manage-salary/manage-salary.component';
import { AuthGuard } from '../auth.guard';
import { AttendanceViewComponent } from './attendance-view/attendance-view.component';
import { AllBranchesReportComponent } from './all-branches-report/all-branches-report.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'branches',
      component:ManageBranchesComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'employee',
      component:ManageEmployeeComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'attendance',
      component:ManageAttendanceComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'attendance-view',
      component:AttendanceViewComponent,
      canActivate:[AuthGuard]
    },
   
    {
      path: 'all-branches-report',
      component:AllBranchesReportComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'salary',
      component:ManageSalaryComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'dashboard',
      component:DashboardComponent,
      canActivate:[AuthGuard]
    },
  
  
  
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
