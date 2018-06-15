import { Books } from './../models/books';
import { BooksService } from './../services/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  error: any;
  public books: Books[] = [];


  constructor(
    private booksSvc: BooksService
  ) { }

  ngOnInit() {
    this.getAllData();
  }

  public getAllData() {
    this.booksSvc.getAllDataBooks().subscribe((response) => {
      this.books = response;
      console.log(this.books);
    }, error => this.error = error);
  }

}
