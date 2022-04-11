# Create a BookApiService
1. Generate a `BookApi` service in the `books` folder that uses the `Book` interface
2. Add a method `getAll()` that returns an array of Books
3. Load the data from the `BookApi` service through the DI into `Book` component

## Hints

#### Generate with ng-cli:

```
ng g interface books/book
ng generate service books/book-api
```

```
// book.component.ts
constructor(private bookData: BookApiService){}
```

[Solution](https://stackblitz.com/github/workshops-de/angular-workshop/tree/solve--create-a-BookApi-service)
