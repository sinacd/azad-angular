import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly ApiUrl="http://localhost:5000/api";
readonly PhotoUrl="http://localhost:5000/Photos";
  constructor(private http:HttpClient) { }
getDepList():Observable<any> 
{
  return this.http.get(this.ApiUrl+'/Department');
}
addDepartment(val: any):Observable<any> 
{
  return this.http.post(this.ApiUrl+'/Department',val);
}
updateDepartment(val:any):Observable<any> 
{
  return this.http.put(this.ApiUrl+'/Department',val);
}
deleteDepartment(val:any):Observable<any> 
{
  return this.http.delete(this.ApiUrl+'/Department/'+val);
}


getEmpList():Observable<any> 
{
  return this.http.get(this.ApiUrl+'/Employee');
}
addEmployee(val: any):Observable<any> 
{
  return this.http.post(this.ApiUrl+'/Employee',val);
}
updateEmployee(val:any):Observable<any> 
{
  return this.http.put(this.ApiUrl+'/Employee',val);
}
deleteEmployee(val:any):Observable<any> 
{
  return this.http.delete(this.ApiUrl+'/Employee',val);
}



getAllDepartmentName():Observable<any> 
{
  return this.http.get(this.ApiUrl+'/Employee/GetAllDepartmentName');
}
uploadPhoto(val: any):Observable<any> 
{
  return this.http.post(this.ApiUrl+'/Employee/SaveFile',val);
}



}
