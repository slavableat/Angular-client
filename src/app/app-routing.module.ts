import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {AddBookComponent} from "./add-book/add-book.component";

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  { path: 'books', component: BookListComponent },
  {path: 'create-book', component:AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
