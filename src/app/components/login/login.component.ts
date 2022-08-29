import { SharedService } from 'src/app/services/shared.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  id:any;
  EmployeeList:any=[];
   user:any;
   ac:boolean=false;
  aa:any={

    EmployeeId:"3" ,
    EmployeeName:"0" ,
    PhotoFileName: "0",
    DateOfjoining:"0" 
    
  } 



  constructor(private formBuilder:FormBuilder,private service :SharedService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })

  }
  login(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
       this.user = data.find((a:any)=>{
        return a.TeacherEmail === this.loginForm.value.email
         && a.TeacherPassword === this.loginForm.value.password
      });
      if(this.user){
        alert('login success');
      /*   this.loginForm.reset(); */
        this.aa=this.user;
        /* this.aa=this.user */
       /*  this.id=this.service.name; */
        this.service.ass(this.user.TeacherId) 
         /*   this.router.navigate(['dashboard'])  */ 
         
      
        }
      else{
        /* alert('user not found'); */
        
      }
    },err=>{
      alert('something went wrong')
    });
  }

}
