import { AbstractBook } from './AbstractBook';
import { Author } from './Author';

export class Book extends AbstractBook {
  constructor(title: string, year: number, author: Author) {
    super(title, year, author);
    author.addBook(this);
  }

  getDescription(): string {
    const author = this.getAuthor();
    return `Physical book "${this.getTitle()}" by ${author.getName()} (${this.getYear()})`;
  }
}
