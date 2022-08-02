import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {
  departmentList:any=[];
  constructor(private sharedservice:SharedService) { }
  ModalTitle!: string;
  ActivateAddEditDepComp:boolean=false;
  dep:any;
  ngOnInit(): void {
    this.refreshDepList();
  }
addClick() {
this.dep={
  DepartmentId:0,
  DepartmentName:""
}
this.ModalTitle="Add Department";
this.ActivateAddEditDepComp=true;
}
closeClick(){
  this.ActivateAddEditDepComp=false;
  this.refreshDepList();
}
editClick(item:any){
this.dep=item;
this.ModalTitle="edit Department";
this.ActivateAddEditDepComp=true;
}

refreshDepList() {
  this.sharedservice.getDepList().subscribe (data =>{
    this.departmentList=data;
  });
}

}