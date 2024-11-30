import { Customer } from '../Customer';
import { Bookstore } from '../Bookstore';

describe('Bookstore - Borrow Book with Invalid Book ID', () => {
    it('should not allow borrowing a book with an invalid book ID', () => {
      const bookstore = new Bookstore();
      const customer = new Customer(1, 'Alice');
  
      bookstore.addCustomer(customer);
  
      const result = bookstore.borrowBook(1, 99); // Invalid book ID
      expect(result).toBe(
        `Borrowing failed. Either the book is not available or customer/book does not exist.`
      );
    });
  });
  