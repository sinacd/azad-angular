import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './components/department/department.component';
import { ShowDepComponent } from './components/department/show-dep/show-dep.component';
import { AddEditDepComponent } from './components/department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ShowEmpComponent } from './components/employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './components/employee/add-edit-emp/add-edit-emp.component';
import { SharedService } from './services/shared.service';
import { HttpClientModule ,  } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShowCorComponent } from './components/dashboard/show-cor/show-cor.component';
import { AddEditCorComponent } from './components/dashboard/add-edit-cor/add-edit-cor.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    LoginComponent,
    DashboardComponent,
    ShowCorComponent,
    AddEditCorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
