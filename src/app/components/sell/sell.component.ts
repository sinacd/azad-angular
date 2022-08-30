import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
   CourseId: string='';

  
  Course:any;
  
  constructor(private activatedroute:ActivatedRoute,
    private service:SharedService
    , private router:Router) { }
  
  /* 
   refreshCorList(CourseId: any){
    this.service.getCourseById(CourseId).subscribe(data=>{
      this.CourseList=data;
      console.log(data)
      this.DepartmentListWithoutFilter=data;
    });
  }  */
   
  ngOnInit(): void {
    //id from url
    this.activatedroute.paramMap.subscribe((params:ParamMap)=>{
      this.CourseId = params.get('CourseId')!;
      console.log(this.CourseId)
    }); 
    //Course from Teacher
   
     this.service.getCourseByIdCourse(this.CourseId)
      .subscribe(data=>{
          this.Course = data;
       

      
        }); 
      /*
       //artist from server
       this.spotifyservice.getArtist(this.artistId)
      .subscribe({
        next:(data) =>{
          this.artist = data;
        
        } 
      }); */
     






}
}