import { Component, OnInit } from '@angular/core';
import {  IAuthor, IBook} from 'src/app/Models/model';
import { BookService } from 'src/app/Services/Book-service.service';
import { AlertService } from 'src/app/sharedComponents/alert/alert.service';

@Component({
  selector: 'app-show-Book',
  templateUrl: './show-Book.component.html',
  styleUrls: ['./show-Book.component.css']
})
export class ShowBookComponent implements OnInit {


 
  constructor(private service:BookService ,private _alertService:AlertService) { 
  }
  ModalTitle:String;
  ActivateAddEditBookComp:boolean=false;
  Book:IBook;
  BookList:IBook[]=[];

  ngOnInit(): void {
this.refreshlist();

  }
  refreshlist(){
    this.service.GetAll().subscribe(res=>{
      this.BookList=res.data;
      debugger
    })
  }

  addclick(){
    this.Book=<IBook>{id:0,authors:<IAuthor[]>[]}
    this.ModalTitle="add Book";
    this.ActivateAddEditBookComp=true;

  }
  closeClick(){

    this.ActivateAddEditBookComp=false;
    this.refreshlist();
  };
  Editclick( item:IBook){
    this.ActivateAddEditBookComp=true;
    this.ModalTitle="Edit Book";
    this.Book=item;

  }
  delete(item:IBook){
   if( confirm("are you sure ?"))
   {
   this.service.Delete(item.id).subscribe(data=>{this._alertService.activateMsg(data.mesasage,",success"),this.refreshlist();});

    
   }
   
  }
}
