import { Component, OnInit } from '@angular/core';
import {  IAuthor } from 'src/app/Models/model';
import { AuthorService } from 'src/app/Services/author-service.service';
import { AlertService } from 'src/app/sharedComponents/alert/alert.service';

@Component({
  selector: 'app-show-Author',
  templateUrl: './show-Author.component.html',
  styleUrls: ['./show-Author.component.css']
})
export class ShowAuthorComponent implements OnInit {


 
  constructor(private service:AuthorService, private _alertService:AlertService) { 
  }
  ModalTitle:String;
  ActivateAddEditAuthorComp:boolean=false;
  Author:IAuthor;
  AuthorList:IAuthor[]=[];

  ngOnInit(): void {
this.refreshlist();

  }
  refreshlist(){
    this.service.GetAll().subscribe(res=>{
      this.AuthorList=res.data;
    })
  }

  addclick(){
    this.Author=<IAuthor>{id:0}
    this.ModalTitle="add Author";
    this.ActivateAddEditAuthorComp=true;

  }
  closeClick(){

    this.ActivateAddEditAuthorComp=false;
    this.refreshlist();
  };
  Editclick( item:IAuthor){
    this.ActivateAddEditAuthorComp=true;
    this.ModalTitle="Edit Author";
    this.Author=item;

  }
  delete(item:IAuthor){
   if( confirm("are you sure ?"))
   {
   this.service.Delete(item.id).subscribe(data=>{this._alertService.activateMsg(data.mesasage,"success"),this.refreshlist();});

    
   }
   
  }
}
