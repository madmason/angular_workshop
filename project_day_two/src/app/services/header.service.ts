import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private headerTitle = new ReplaySubject<string>(1);

  getHeader(): Observable<string> {
    return this.headerTitle.asObservable();
  }

  setHeader(title: string) {
    this.headerTitle.next(title);
  }
}
