import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  CourseList:any=[];
  PhotoFilePath: string | undefined;
  ModalTitle:string | undefined;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  DepartmentListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshEmpList(); 
    
    console.log(this.service.name);
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeetName:"",
      Department:"",
      DateOfJoining:"",
      photoFileName:"anonymous.PNG"
    }
    this.ModalTitle="افزودن دوره";
    this.ActivateAddEditEmpComp=true;

  }

  editClick(item: any){
    this.emp=item;
    this.ModalTitle="تغییر دوره";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item: { EmployeeId: any; }){
    if(confirm('آیا میخواهید این دوره را پاک کنید')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getCorList().subscribe(data=>{
      this.CourseList=data;
      this.DepartmentListWithoutFilter=data;
      this.loadImage();
    });
    

  }
  loadImage()
  {
    this.PhotoFilePath=this.service.PhotoUrl;
  }

  FilterFn(){
    var DepartmentIdFilter = this.DepartmentIdFilter;
    var DepartmentNameFilter = this.DepartmentNameFilter;

    this.CourseList = this.DepartmentListWithoutFilter.filter(function (el: { DepartmentId: { toString: () => string; }; DepartmentName: { toString: () => string; }; }){
        return el.DepartmentId.toString().toLowerCase().includes(
          DepartmentIdFilter.toString().trim().toLowerCase()
        )&&
        el.DepartmentName.toString().toLowerCase().includes(
          DepartmentNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.CourseList = this.DepartmentListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
