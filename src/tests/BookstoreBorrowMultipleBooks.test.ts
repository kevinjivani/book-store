import { Book } from '../Book';
import { Customer } from '../Customer';
import { Bookstore } from '../Bookstore';

describe('Bookstore - Borrow Multiple Books', () => {
    it('should allow a customer to borrow multiple books if available', () => {
      const bookstore = new Bookstore();
      const book1 = new Book(1, 'The Hobbit', 'J.R.R. Tolkien', true);
      const book2 = new Book(2, 'The Silmarillion', 'J.R.R. Tolkien', true);
      const customer = new Customer(1, 'Alice');
  
      bookstore.addBook(book1);
      bookstore.addBook(book2);
      bookstore.addCustomer(customer);
  
      const result1 = bookstore.borrowBook(1, 1); // Borrow book1
      const result2 = bookstore.borrowBook(1, 2); // Borrow book2
  
      expect(result1).toBe('Alice successfully borrowed "The Hobbit".');
      expect(result2).toBe('Alice successfully borrowed "The Silmarillion".');
      expect(customer.borrowedBooks).toEqual([1, 2]);
    });
  });
  