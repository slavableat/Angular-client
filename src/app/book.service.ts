import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl='http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  public findAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.booksUrl}/books`);
  }

  public save(book: Book) {
    return this.httpClient.post<Book>(this.booksUrl, book);
  }

  public deleteBook(id:number){
    return this.httpClient.delete(`${this.booksUrl}/delete/${id}`);
  }

}
