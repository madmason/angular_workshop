export interface Book {
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  numPages: number;
  author: string;
  publisher: Publisher;
  cover: string;
}

export interface Publisher {
  name: string;
  url: string;
}

