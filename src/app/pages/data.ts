//for branches
export interface Branches{
    branch_id:number,
    branch_name:string,
    branch_code:number,
    branch_address:string,
    }
    export class Branches{
    branch_id:number;
    branch_name:string;
    branch_code:number;
    branch_address:string;
    }
    // for employee
    export interface Employees{
      emp_id:number;
        branch_name:string,
        branch_id:string,
        name:string,
        email:string,
        address:string,
        pay_type:string,
        hourly_rate:number,
        monthly_salary:number,
        phone:number,
        emp_number:number,
        role:string,
        user_id:number;
        auth_token:string;        


    }
    export class Employees{
      emp_id:number;
      branch_name:string;
      branch_id:string;
      name:string;
      email:string;
      address:string;
      pay_type:string;
      hourly_rate:number;
      monthly_salary:number;
      phone:number;
      emp_number:number;
      role:string;
      user_id:number;
        auth_token:string;
    }
    // for attendance
    export class atten{
     emp_id:string;
     branch_id:string;
     name:string;
    }
    export interface atten{
      emp_id:string;
      branch_id:string;
      name:string;
     }
     //for view-Attandance
     export class viewAtten{
      attend_id:any;
      date: any;
      emp_id:any;
      name:any;
      branch_id:any;
      branch_name: any;
      status:any;
     }
     export interface viewAtten{
      attend_id:any;
      date:any;
      emp_id:any;
      name:any;
      branch_id:any;
      branch_name:any;
      status:any;
     }
     //update-attendance
     export class updateAtten{
       user_id:any;
      attend_id:any;
     branch_id:any;
     auth_token:any;
     status:any;
     }




    // for dummy text
    export interface emplye{
  first_name:string,
  last_name:string,
  sin_no: number,
  address: string,
  pay_type:string,
  hourly_rate: number,
  yearly_salary: number,
  phone_number:number,
  employee_no: number,
  employee_category: string,
  collector_license_no:number,
  file_status: string,
  date:string,
  user_id:number,
    }
    export class emplye{
        first_name:string;
        last_name:string;
        sin_no: number;
        address: string;
        pay_type:string;
        hourly_rate: number;
        yearly_salary: number;
        phone_number:number;
        employee_no: number;
        employee_category: string;
        collector_license_no:number;
        file_status: string;
        date:string;
        user_id:number;
          }
          export class dataget{
            user_id:number;
            auth_token:string;
            
          }
          export class userModel{
            constructor(
              public name:string,
              public topic:string,
            ){}
          }
          export class BranchesSend{
            branch_id:number;
            branch_name:string;
            branch_code:string;
            branch_address:string;
            user_id:number;
            auth_token:string;
            }
            export interface BranchesSend{
              branch_id:number;
              branch_name:string;
              branch_code:string;
              branch_address:string;
              user_id:number;
              auth_token:string;
              }
              export class BrancheDelete{
                branch_id:number;
                user_id:number;
              auth_token:string;
              }
              export class namee{
                user_id:string;
                branch_id:number;
                auth_token:string;
                date:string;
                attendance_log:any;
              }
