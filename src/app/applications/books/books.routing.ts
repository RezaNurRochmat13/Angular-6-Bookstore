import { AddNewBooksComponent } from './core/add-new-books/add-new-books.component';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './core/books.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
   },
   {
     path: 'add-new-books',
     component: AddNewBooksComponent
   }
];

export const BooksRoutes = RouterModule.forChild(routes);
