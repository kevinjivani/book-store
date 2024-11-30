import { Customer } from '../Customer';
import { Bookstore } from '../Bookstore';

describe('Bookstore - Return Book with Invalid Book ID', () => {
    it('should not allow returning a book with an invalid book ID', () => {
      const bookstore = new Bookstore();
      const customer = new Customer(1, 'Alice');
  
      bookstore.addCustomer(customer);
  
      const result = bookstore.returnBook(1, 99); // Invalid book ID
      expect(result).toBe(
        `Return failed. Either the book was not borrowed by the customer or customer/book does not exist.`
      );
    });
  });
  