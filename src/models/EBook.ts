import { AbstractBook } from './AbstractBook';
import { Author } from './Author';

export class EBook extends AbstractBook {
  private url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super(title, year, author);
    this.url = url;
    author.addBook(this);
  }

  getDescription(): string {
    const author = this.getAuthor();
    return `E-book "${this.getTitle()}" by ${author.getName()} (${this.getYear()}) - Available at: ${this.url}`;
  }
}