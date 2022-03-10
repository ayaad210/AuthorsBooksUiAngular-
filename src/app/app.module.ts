import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './Components/Author/Author.component';
import { ShowAuthorComponent } from './Components/Author/show-Author/show-Author.component';
import { AddEditAuthorComponent } from './Components/Author/add-edit-Author/add-edit-Author.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorService, } from './Services/author-service.service';
import { FileUploadComponent } from './sharedComponents/file-upload/file-upload.component';
import { BookComponent } from './Components/Book/Book.component';
import { AddEditBookComponent } from './Components/Book/add-edit-Book/add-edit-Book.component';
import { ShowBookComponent } from './Components/Book/show-Book/show-Book.component';
import { HomeComponent } from './Components/home/home.component';
import { NglrxPipesModule } from '@nglrx/pipes';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AlertModule } from './sharedComponents/alert/alert.module';

@NgModule({
  declarations: [
    AppComponent,
   
    AuthorComponent,
    ShowAuthorComponent,
    AddEditAuthorComponent,
    FileUploadComponent,
    BookComponent,
    AddEditBookComponent,
    ShowBookComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    NglrxPipesModule , SweetAlert2Module.forRoot(),AlertModule

  ],
  providers: [AuthorService],//injectable
  bootstrap: [AppComponent]
})
export class AppModule { }
