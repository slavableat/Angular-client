import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";
import {Router} from "@angular/router";
import {Genre} from "../genre";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  myForm : FormGroup;
  book:Book=new Book();
  constructor(private formBuilder: FormBuilder){
    this.book.genre=new Genre();
    this.book.authors=[];
    this.book.authors.push();
    this.myForm = formBuilder.group({
      "bookName": ["", [Validators.required]],
      "bookGenre": ["", [ Validators.required]],
      "authors": formBuilder.array([
        ["", Validators.required]
      ])
    });
  }
  getFormsControls() : FormArray{
    return this.myForm.controls['authors'] as FormArray;
  }
  addPhone(){
    (<FormArray>this.myForm.controls["authors"]).push(new FormControl("", Validators.required));
  }
  submit(){
    console.log(this.book);
    console.log(this.myForm);
  }

  ngOnInit(): void {
  }
}
