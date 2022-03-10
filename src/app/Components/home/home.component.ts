import { Component, OnInit } from '@angular/core';
import { IBook } from '../../Models/model';
import { BookService } from '../../Services/Book-service.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly photosurl="http://localhost:5000/photos/"
  SearchModel:IBook=<IBook>{}
  BookList: IBook[];
  constructor(private _Bookservice:BookService) { }

  ngOnInit(): void {

    this.RefreshList();
  }
  RefreshList() {
    this._Bookservice.GetAll().subscribe(res=>{
      this.BookList = res.data;
      
    })
  }

  Search(){
    
    if (this.SearchModel.title) {
      this._Bookservice.Search(this.SearchModel).subscribe(res=>
        {
          
          this.BookList=res.data;
        }
        );
    }
    else{
      this.RefreshList();
    }

  }

}
