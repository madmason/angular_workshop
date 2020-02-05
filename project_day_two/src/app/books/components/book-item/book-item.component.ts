import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: [ './book-item.component.scss' ],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() sendTitle = new EventEmitter<string>();

  constructor(private readonly headerService: HeaderService) { }

  ngOnInit() {
  }

  sendBookTitle() {
    this.sendTitle.emit(this.book.title);
  }

  changeHeader() {
    this.headerService.setHeader(this.book.title);
  }
}
