import { Book } from '../Book';
import { Bookstore } from '../Bookstore';

describe('Bookstore - Borrow Book with Invalid Customer ID', () => {
    it('should not allow borrowing a book with an invalid customer ID', () => {
      const bookstore = new Bookstore();
      const book = new Book(1, 'Pride and Prejudice', 'Jane Austen', true);
  
      bookstore.addBook(book);
  
      const result = bookstore.borrowBook(99, 1); // Invalid customer ID
      expect(result).toBe(
        `Borrowing failed. Either the book is not available or customer/book does not exist.`
      );
  
      expect(book.available).toBe(true); // Book should still be available
    });
  });
  