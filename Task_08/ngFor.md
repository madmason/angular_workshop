# Use *ngFor
1. Create an array with sample books in your `AppComponent` component
2. Iterate over books with `*ngFor`

## Hints

`*ngFor="let book of books"`

```
…
books: Book[] = [
  {
    "title": "Design Patterns",
    "subtitle": "Elements of Reusable Object-Oriented Software"
  },
  {
    "title": "REST und HTTP",
    "subtitle": "Entwicklung und Integration nach dem Architekturstil des Web"
  },
  {
    "title": "Eloquent JavaScript",
    "subtitle": "A Modern Introduction to Programming"
  }
]
…
```

[Solution](https://stackblitz.com/github/angularjs-de/angular-workshop/tree/Use-ngFor)
