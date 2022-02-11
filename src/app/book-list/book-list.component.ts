import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public books: Book[] = [];

  constructor(private bookService: BookService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks(): void {
    this.bookService.findAll().subscribe(
      (response: Book[]) => {
        this.books = response;
        console.log(this.books);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public deleteBook(id:number){
    this.bookService.deleteBook(id).subscribe( data => {
      console.log(data);
      this.getBooks();
    })
  }
  public editBook(id:number){
    this.router.navigate(['edit-book',{id:id}]);
  }


  }
