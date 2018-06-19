import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewBooksComponent } from './core/add-new-books/add-new-books.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './core/books.component';
import { BooksRoutes } from './books.routing';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutes,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
  BooksComponent,
  AddNewBooksComponent]
})
export class BooksModule { }
