import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './core/books.component';
import { BooksRoutes } from './books.routing';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutes
  ],
  declarations: [BooksComponent]
})
export class BooksModule { }
