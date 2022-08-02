import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'employee',component:EmployeeComponent},
{path:'department',component:DepartmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
