import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'localhost://8080/book';

  constructor(private http:HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBooksById(id:number):Observable<Book>{
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  createBook(book:Book){
    return this.http.post(this.apiUrl, book);
  }

  updateBook(book:Book){
    return this.http.put(this.apiUrl,book);
  }

  deleteBook(id:number){
    return this.http.delete<Book[]>(`${this.apiUrl}/${id}`);
  }
}
