import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-new-books',
  templateUrl: './add-new-books.component.html',
  styleUrls: ['./add-new-books.component.css']
})
export class AddNewBooksComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private booksSvc: BooksService
  ) { }

  ngOnInit() {
    this.doInitForm();
  }

  doInitForm() {
    this.bookForm = this.formBuilder.group({
      book_name: '',
      book_writer: '',
      book_publisher: '',
      book_description: ''
    });
  }

  onFormApplicationSubmit() {
    const body = {
      book_name: this.bookForm.value.book_name,
      book_writer: this.bookForm.value.book_writer,
      book_publisher: this.bookForm.value.book_publisher,
      book_description: this.bookForm.value.book_description
    };
    this.doCreate(body);
  }

  doCreate(body) {
    this.booksSvc.saveBooks(body).subscribe((response) => {
      console.log('Insert berhasil', response);
    });
  }
}
