import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {  IAuthor, IBook } from 'src/app/Models/model';
import { AuthorService } from 'src/app/Services/author-service.service';
import { BookService } from 'src/app/Services/Book-service.service';
import { AlertService } from 'src/app/sharedComponents/alert/alert.service';

@Component({
  selector: 'app-add-edit-Book',
  templateUrl: './add-edit-Book.component.html',
  styleUrls: ['./add-edit-Book.component.css']
})
export class AddEditBookComponent implements OnInit {
@Input("Book") Model: IBook;
UploadNow:boolean=false;
fileimageUrl: string='default.jpg';
AuthorsList:IAuthor[]=[]
SelectedAuthorid=0;
SelectedAuthorsList:IAuthor[]=[]
constructor(private service:BookService,private _authorServie:AuthorService,private _alertServic:AlertService) 
{ 
 
}

  setDropDownData() {
    this._authorServie.GetAll().subscribe(res=>{
      this.AuthorsList=res.data;
    })
  }

  ngOnInit(): void {
     if(this.Model.authors){
    this.SelectedAuthorsList=this.Model.authors

  }
  this.fileimageUrl=this.Model.coverPath;

  this.setDropDownData();

    this.fileimageUrl=this.Model.coverPath;
  }

  OnFileUploaded(event){
    if(!!event){
          this.fileimageUrl=event
    }
    
  }


  Add(){

if(!this.checkModelstate()){
return
}

    this.Model.coverPath=this.fileimageUrl;
    this.Model.authors=this.SelectedAuthorsList;
   this.service.Add(this.Model).subscribe(data=>this._alertServic.activateMsg(data.mesasage,"success"));

   this.Model=<IBook>{}
   this.SelectedAuthorsList=[];
   this.setDropDownData();
  }
  checkModelstate():boolean {
    if(this.Model.title==''||this.Model.title==null){
      this._alertServic.activateMsg("Insert Requerd Data","","warning")
return false
    }
    return true
  }
  Edit(){
    if (!this.checkModelstate()) {
      return
    }
    this.Model.coverPath=this.fileimageUrl;
   this.service.Update(this.Model).subscribe(data=>this._alertServic.activateMsg(data.mesasage,"success"));


   }


   AddAuthor(){
   let author =  this.AuthorsList.find(x=>x.id==this.SelectedAuthorid);
   this.AuthorsList
   

   if (!!author) {
     
    this.AuthorsList.splice(this.AuthorsList.indexOf(author),1);

   this.SelectedAuthorsList.push(author)
        
   }
    
   }

   RemoveAuthorFromSelected(item:IAuthor){
    let auth=  this.SelectedAuthorsList.find(x=>x.id==item.id);
    
    if (!!auth) {
     this.SelectedAuthorsList.splice(this.SelectedAuthorsList.indexOf(auth),1);

        this.AuthorsList.push(auth)
         
    }
   }
}
