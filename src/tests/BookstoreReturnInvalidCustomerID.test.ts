import { Book } from '../Book';
import { Bookstore } from '../Bookstore';


describe('Bookstore - Return Book with Invalid Customer ID', () => {
    it('should not allow returning a book with an invalid customer ID', () => {
      const bookstore = new Bookstore();
      const book = new Book(1, '1984', 'George Orwell', false);
  
      bookstore.addBook(book);
  
      const result = bookstore.returnBook(99, 1); // Invalid customer ID
      expect(result).toBe(
        `Return failed. Either the book was not borrowed by the customer or customer/book does not exist.`
      );
    });
  });
  