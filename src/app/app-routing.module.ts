import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEditEmpComponent } from './components/employee/add-edit-emp/add-edit-emp.component';
import { SellComponent } from './components/sell/sell.component';

const routes: Routes = [

{path:'',component:EmployeeComponent},
{path:'employee',component:EmployeeComponent},
{path:'department',component:DepartmentComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:AddEditEmpComponent},
{path:'dashboard',component:DashboardComponent},
{path:'sell/:CourseId',component:SellComponent, pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
