import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookDataService } from '../../services/book-data.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: [ './books.component.scss' ],
})
export class BooksComponent implements OnInit, OnDestroy {
  // books: Book[];
  subscription: Subscription;
  books$: Observable<Book[]>;
  destroy$ = new Subject<boolean>();

  constructor(private readonly bookDataService: BookDataService) {}

  ngOnInit() {
    this.books$ = this.bookDataService.getBooks().pipe(
      takeUntil(this.destroy$),
    );
    /*  this.subscription = this.bookDataService.getBooks().subscribe(
        books => this.books = books,
      );*/
  }

  ngOnDestroy() {
    this.destroy$.next(true);

    /*  if ( this.subscription ) {
        this.subscription.unsubscribe();
      }*/
  }

  trackById(index, book): number {
    return index;
  }

  sendTitleEventHandler(title: string) {
    console.log(title);
  }
}
