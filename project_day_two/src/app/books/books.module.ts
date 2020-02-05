import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './components/books/books.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookCreateComponent } from './components/book-create/book-create.component';


@NgModule({
  declarations: [ BooksComponent, BookItemComponent, BookDetailComponent, BookCreateComponent ],
  imports: [
    CommonModule,
    BooksRoutingModule,
  ],
  exports: [ BooksComponent ],
})
export class BooksModule {}
