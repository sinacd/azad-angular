import { SharedService } from 'src/app/services/shared.service';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }
/* 
 this.emp={
      EmployeeId:0,
      EmployeeetName:"",
      Department:"",
      DateOfJoining:"",
      photoFileName:"anonymous.PNG"
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true; */

  @Input() emp:any;
  TeacherId:string='0';
  TeacherName:string="";
  TeacherPhone:string="";
  TeacherPhotoFileName: string="anonymous.PNG";
  TeacherEmail:string="";
  TeacherPassword: string="";
  PhotoFilePath: string | undefined;

  DepartmentsList:any=[];

  ngOnInit(): void {
    this.loadDepartmentList();
   
    console.log(this.service.name);
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList=data;
      
    /*   this.TeacherId=this.emp.TeacherId;
      this.TeacherName=this.emp.TeacherName;
      this.TeacherPhone=this.emp.TeacherPhone;
      this.TeacherEmail=this.emp.TeacherEmail;
      this.TeacherPassword=this.emp.TeacherPassword;
      this.TeacherPhotoFileName=this.emp.TeacherPhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.TeacherPhotoFileName; */
      console.log(this.TeacherName);
    });
  }

  addEmployee(){
    var val = {TeacherId:this.TeacherId,
                TeacherName:this.TeacherName,
                TeacherPhone:this.TeacherPhone,
                TeacherEmail:this.TeacherEmail,
                TeacherPassword:this.TeacherPassword,
                TeacherPhotoFileName:this.TeacherPhotoFileName};

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
    this.TeacherId='0';
    this.TeacherName="";
    this.TeacherPhone="";
    this.TeacherEmail="";
    this.TeacherPassword="";
  }

  updateEmployee(){
    var val = {TeacherId:this.TeacherId,
      TeacherName:this.TeacherName,
      TeacherPhone:this.TeacherPhone,
      TeacherEmail:this.TeacherEmail,
      TeacherPassword:this.TeacherPassword,
      TeacherPhotoFileName:this.TeacherPhotoFileName};

    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.TeacherPhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.TeacherPhotoFileName;
    })
  }

}

