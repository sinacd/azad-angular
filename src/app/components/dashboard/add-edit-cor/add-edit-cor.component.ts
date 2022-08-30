import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-cor',
  templateUrl: './add-edit-cor.component.html',
  styleUrls: ['./add-edit-cor.component.css']
})
export class AddEditCorComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() cor:any;
  CourseId:string | undefined;
  CourseName:string | undefined;
  CoursePrice:string | undefined;
  CourseDescription:string | undefined;
  CoursePhotoFileName: string | undefined;
  CoursePhotoFilePath: string | undefined;
  CourseAuthorId: string | undefined;
  CourseAuthorName: string | undefined;


  DepartmentsList:any=[];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList=data;
      
      this.CourseId=this.cor.CourseId;
      this.CourseName=this.cor.CourseName;
      this.CoursePrice=this.cor.CoursePrice;
      this.CourseDescription=this.cor.CourseDescription;
      this.CourseAuthorId=this.cor.CourseAuthorId;
      this.CourseAuthorName=this.cor.CourseAuthorName;
      this.CoursePhotoFileName=this.cor.CoursePhotoFileName;
      this.CoursePhotoFilePath=this.service.PhotoUrl+this.CoursePhotoFileName;
      
    });
  }

  addCourse(){
    var val = {CourseId:this.CourseId,
               CourseName:this.CourseName,
               CoursePhotoFileName:this.CoursePhotoFileName,
                CourseDescription:this.CourseDescription,
                CoursePrice:this.CoursePrice,
                CourseAuthorName:this.CourseAuthorName,
                CourseAuthorId:this.CourseAuthorId};
     console.log(val)
    this.service.addCourse(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCourse(){
    var val = {CourseId:this.CourseId,
      CourseName:this.CourseName,
      CoursePhotoFileName:this.CoursePhotoFileName,
      CoursePrice:this.CoursePrice,
      CourseDescription:this.CourseDescription,
      CourseAuthorName:this.CourseAuthorName,
      CourseAuthorId:this.CourseAuthorId};

    this.service.updateCourse(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhotoCourse(formData).subscribe((data:any)=>{
      this.CoursePhotoFileName=data.toString();
      this.CoursePhotoFilePath=this.service.PhotoUrl+this.CoursePhotoFileName;
    })
  }

}

