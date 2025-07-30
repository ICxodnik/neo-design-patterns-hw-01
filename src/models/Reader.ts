import { Copy } from './Copy';

export class Reader {
  private id: string;
  private name: string;
  private copies: Copy[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  borrow(copy: Copy): void {
    this.copies.push(copy);
  }

  return(copy: Copy): void {
    this.copies = this.copies.filter(borrowedCopy => borrowedCopy !== copy);
  }

  getName(): string {
    return this.name;
  }
}