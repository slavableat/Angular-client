import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";
import {Router} from "@angular/router";
import {Genre} from "../genre";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book:Book=new Book();
  constructor(private bookService :BookService,
              private router:Router) { }

  ngOnInit(): void {
    this.book.authors=[];
    this.book.genre=new Genre();
  }

  saveBook(){
    this.bookService.saveBook(this.book).subscribe(data=>{
      console.log(data);
      this.goToBookList();
    });
  }
  goToBookList(){
    this.router.navigate(['/books']);
  }
  onSubmit(){
    console.log(this.book);
    this.saveBook();
  }
}
