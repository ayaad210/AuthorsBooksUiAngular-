import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IAuthor, IBook } from 'src/app/Models/model';
import { AuthorService } from 'src/app/Services/author-service.service';
import { AlertService } from 'src/app/sharedComponents/alert/alert.service';

@Component({
  selector: 'app-add-edit-Author',
  templateUrl: './add-edit-Author.component.html',
  styleUrls: ['./add-edit-Author.component.css']
})
export class AddEditAuthorComponent implements OnInit {
@Input("Author") Model: IAuthor;
UploadNow:boolean=false;
fileimageUrl: any;
  
constructor(private service:AuthorService,private _alertService:AlertService) { }

  ngOnInit(): void {
    this.fileimageUrl=this.Model.imagePath;
  }

  OnFileUploaded(event){
    if(!!event){
          this.fileimageUrl=event
    }
    
  }


  Add(){
    if (!this.checkModelstate()) {
      return
    }
    this.Model.imagePath=this.fileimageUrl;
   this.service.Add(this.Model).subscribe(data=>this._alertService.activateMsg(data.mesasage,"success"));
 this.Model=<IAuthor>{}
 
  }
  Edit(){
 if (!this.checkModelstate()) {
   return
 }

    this.Model.imagePath=this.fileimageUrl;
   this.service.Update(this.Model).subscribe(data=>this._alertService.activateMsg(data.mesasage,"success"));


   }

   checkModelstate():boolean {
    if(this.Model.name==''||this.Model.name==null){
      this._alertService.activateMsg("Insert Requerd Data","","warning")
return false
    }
    return true
  }




}
