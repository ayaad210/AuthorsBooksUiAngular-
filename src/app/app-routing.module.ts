import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './Components/Author/Author.component';
import { BookComponent } from './Components/Book/Book.component';
import { HomeComponent } from './Components/home/home.component';
const routes: Routes = [

  {path:'Authors',component:AuthorComponent},
  {path:'Books',component:BookComponent},
  {path:'Home',component:HomeComponent},
  {path:'',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
