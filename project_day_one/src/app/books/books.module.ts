import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './components/books/books.component';
import { BookItemComponent } from './components/book-item/book-item.component';


@NgModule({
  declarations: [ BooksComponent, BookItemComponent ],
  imports: [
    CommonModule,
    BooksRoutingModule,
  ],
  exports: [ BooksComponent ],
})
export class BooksModule {}
