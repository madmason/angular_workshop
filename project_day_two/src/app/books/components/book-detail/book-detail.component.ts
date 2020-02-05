import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../../services/book-data.service';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.scss' ],
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book>;

  constructor(private readonly bookDataService: BookDataService,
              private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.book$ = this.route.params.pipe(
      map(params => params.isbn),
    //  pluck('isbn'),
      switchMap(isbn => this.bookDataService.getBookByIsbn(isbn)),
    );
  }
}
