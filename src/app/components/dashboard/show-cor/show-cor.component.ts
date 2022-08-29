import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-show-cor',
  templateUrl: './show-cor.component.html',
  styleUrls: ['./show-cor.component.css']
})
export class ShowCorComponent implements OnInit {

  constructor(private service:SharedService) { }

 
  CourseList:any=[];

  CourseId?: string
  CourseName?: string
  CoursePrice?: string
 CoursePhotoFileName?: string
 CourseDescription?: string
 CourseAuthorId?: string



  
  
  ModalTitle:string | undefined;
  ActivateAddEditCorComp:boolean=false;
  cor:any;

  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  DepartmentListWithoutFilter:any=[];

  ngOnInit(): void {
 /*    this.CourseAuthorId=this.corauth.CourseAuthorId; */
 /*    this.refreshCorList(this.CourseAuthorId);   */
    this.refreshCorList(this.service.name);  
   
    console.log(this.service.name);
   
  }

  addClick(){
    this.cor={
      CourseId:0,
      CourseName:"",
      CoursePrice:"",
      CoursePhotoFileName:"anonymous.PNG",
      CourseDescription:"",
      CourseAuthorId:this.service.name
    }
    this.ModalTitle=" افزودن دوره";
    this.ActivateAddEditCorComp=true;

  }

  editClick(item: any){
    this.cor=item;
    this.ModalTitle="تغییر دوره ";
    this.ActivateAddEditCorComp=true;
  }

  deleteClick(item: { CourseId: any; }){
    if(confirm('آیا میخواهید این دوره را پاک کنید؟')){
      this.service.deleteCourse(item.CourseId).subscribe(data=>{
        alert(data.toString());
         this.refreshCorList(this.service.name);  
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCorComp=false;
      this.refreshCorList(this.service.name);  
  }


  refreshCorList(CourseId: any){
    this.service.getCourseById(CourseId).subscribe(data=>{
      this.CourseList=data;
      console.log(data)
      this.DepartmentListWithoutFilter=data;
    });
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
