import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Manage Branches',
    link: '/pages/branches',
    home: true,
  },

  {
    title: 'Manage Employees',
    link: '/pages/employee',
    home: true,
  },
  {
    title: 'Manage Attendance',
    children: [
      {
        title: 'Create Attendance',
        link: '/pages/attendance',
        home: true,
      },
      {
        title: 'All Branches Report',
        link: '/pages/all-branches-report',
        home: true,
      },
  {
    title: 'View Attendance',
    link: '/pages/attendance-view',
    home: true,
  },
],
  },
  {
    title: 'Manage Salary',
    link: '/pages/salary',
    home: true,
  },
  {
    title: 'Report',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Salary',
   
    link: '/pages/e-commerce',
    home: true,
  },
  
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
 
];
