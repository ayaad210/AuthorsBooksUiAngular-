import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor, IAuthorCreate } from '../Models/model';
import { ApiResponse } from '../Models/ResponseForm';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
   readonly apiurl="http://localhost:5000/api/Author";
  
   constructor(private http:HttpClient) { }

  GetAll():Observable<ApiResponse<IAuthor>>{
    return this.http.get<ApiResponse<IAuthor>>(this.apiurl);    
  }

  GetById(id:number):Observable<ApiResponse<IAuthor>>{
    return this.http.get<ApiResponse<IAuthor>>(this.apiurl+"/"+id);    
  }
  Add(val:IAuthorCreate){
    return this.http.post<ApiResponse<IAuthor>>(this.apiurl,val)
  }
  
  Update(val:IAuthor){
    return this.http.put<ApiResponse<IAuthor>>(this.apiurl,val)
  }
  Delete(id:number){
    return this.http.delete<ApiResponse<IAuthor>>(this.apiurl+"/"+id)
  }

}
