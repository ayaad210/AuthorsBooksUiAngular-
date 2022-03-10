import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook, IBooksCreate } from '../Models/model';
import { ApiResponse } from '../Models/ResponseForm';

@Injectable({
  providedIn: 'root'
})
export class BookService {
   readonly apiurl="http://localhost:5000/api/Book";
  
   constructor(private http:HttpClient) { }

  GetAll():Observable<ApiResponse<IBook>>{
    return this.http.get<ApiResponse<IBook>>(this.apiurl);    
  }

  GetById(id:number):Observable<ApiResponse<IBook>>{
    return this.http.get<ApiResponse<IBook>>(this.apiurl+"/"+id);    
  }
  Add(val:IBook){
    return this.http.post<ApiResponse<IBook>>(this.apiurl,val)
  }
  Search(val:IBook){
    return this.http.post<ApiResponse<IBook>>(this.apiurl+"/Search",val)
  }
  Update(val:IBook){
    return this.http.put<ApiResponse<IBook>>(this.apiurl,val)
  }
  Delete(id:number){
    return this.http.delete<ApiResponse<IBook>>(this.apiurl+"/"+id)
  }

}
