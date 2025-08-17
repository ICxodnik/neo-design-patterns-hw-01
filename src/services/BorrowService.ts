import { Reader } from '../models/Reader';
import { Copy } from '../models/Copy';

export class BorrowService {
  borrow(reader: Reader, copy: Copy): boolean {
    if (copy.isCopyAvailable()) {
      copy.borrow();
      reader.borrow(copy);
      return true;
    }
    return false;
  }

  return(reader: Reader, copy: Copy): void {
    copy.return();
    reader.return(copy);
  }
}
