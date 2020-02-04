import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { BooksModule } from './books/books.module';
import { AboutModule } from './about/about.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    NavigationComponent,
    InfoBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
