import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly ApiUrl="http://localhost:5000/api";
readonly PhotoUrl="http://localhost:5000/Photos/";
name:any;
loginStat:any=false;
ass(bass:any){
  this.name= bass
  this.loginStat= true
}
constructor(private http:HttpClient) { }

getDepList():Observable<any[]>{
  return this.http.get<any>(this.ApiUrl+'/department');
}

addDepartment(val:any){
  return this.http.post(this.ApiUrl+'/Department',val);
}

updateDepartment(val:any){
  return this.http.put(this.ApiUrl+'/Department',val);
}

deleteDepartment(val:any){
  return this.http.delete(this.ApiUrl+'/Department/'+val);
}


getEmpList():Observable<any[]>{
  return this.http.get<any>(this.ApiUrl+'/Teacher');
}

addEmployee(val:any){
  return this.http.post(this.ApiUrl+'/Teacher',val);
}

updateEmployee(val:any){
  return this.http.put(this.ApiUrl+'/Teacher',val);
}

deleteEmployee(val:any){
  return this.http.delete(this.ApiUrl+'/Teacher/'+val);
}


UploadPhoto(val:any){
  return this.http.post(this.ApiUrl+'/Teacher/SaveFile',val);
}

getAllDepartmentNames():Observable<any[]>{
  return this.http.get<any[]>(this.ApiUrl+'/Teacher/GetAllDepartmentName');
}
getCorList():Observable<any[]>{
  return this.http.get<any>(this.ApiUrl+'/Course');
}
addCourse(val:any){
  return this.http.post(this.ApiUrl+'/Course',val);
}

updateCourse(val:any){
  return this.http.put(this.ApiUrl+'/Course',val);
}

deleteCourse(val:any){
  return this.http.delete(this.ApiUrl+'/Course/'+val);
}


UploadPhotoCourse(val:any){
  return this.http.post(this.ApiUrl+'/Course/SaveFile',val);
}

getCourseById(val:any):Observable<any[]>{
  return this.http.get<any[]>(this.ApiUrl+'/Course/'+val);
}




}
