import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book.service";
import {Book} from "../book";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book:Book=new Book();
  id:number;
  myForm:FormGroup;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private bookService:BookService,
              private formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.bookService.getById(this.id).subscribe(data=>{
      this.book=data;
      console.log(this.book);
    }, error => console.log(error));
    this.myForm = this.formBuilder.group({
      "bookName": [this.book.name, [Validators.required]],
      "bookGenre": [this.book.genre.name, [ Validators.required]],
      "authors": this.formBuilder.array([
        [this.book.authors[0], Validators.required]
      ])
    });
  }
  getFormsControls() : FormArray{
    return this.myForm.controls['authors'] as FormArray;
  }
}
