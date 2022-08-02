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

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent
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
