import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: [ './books.component.scss' ],
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    { title: 'Titel 1', author: 'MK' },
    { title: 'Titel 2', author: 'NB' },
    { title: 'Titel 3', author: 'CK' },
  ];

  constructor() {

  }

  trackById(index, book) {
    return index;
  }

  ngOnInit() {

  }

  sendTitleEventHandler(title: string) {
    console.log(title);
  }

}
