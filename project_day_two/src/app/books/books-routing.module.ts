import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BooksComponent } from './components/books/books.component';


const routes: Routes = [
  {
    path: 'books',
    children: [
      {
        path: '',
        component: BooksComponent,
      },
      {
        path: 'create',
        component: BookCreateComponent,
      },
      {
        path: ':isbn',
        component: BookDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class BooksRoutingModule {}
