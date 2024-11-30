import { Book } from '../Book';
import { Customer } from '../Customer';
import { Bookstore } from '../Bookstore';

describe('Bookstore - Borrow Book Not Available', () => {
  it('should not allow borrowing a book that is already borrowed or does not exist', () => {
    const bookstore = new Bookstore();
    const book = new Book(1, 'Moby Dick', 'Herman Melville', true);
    const customer = new Customer(1, 'Alice');

    bookstore.addBook(book);
    bookstore.addCustomer(customer);

    bookstore.borrowBook(1, 1); // Alice borrows the book successfully
    const result = bookstore.borrowBook(2, 1); // Non-existent customer ID 2 tries to borrow the book
    expect(result).toBe(
      `Borrowing failed. Either the book is not available or customer/book does not exist.`
    );
    expect(book.available).toBe(false); // Book should still be unavailable
  });
});

describe('Bookstore - Add Customer', () => {
  it('should add a customer to the bookstore', () => {
    const bookstore = new Bookstore();
    const customer = new Customer(1, 'Bob');

    bookstore.addCustomer(customer);

    expect(bookstore.findCustomerById(1)).toEqual(customer);
  });
});

describe('Bookstore - Return Book Not Borrowed', () => {
  it('should not allow returning a book not borrowed by the customer', () => {
    const bookstore = new Bookstore();
    const book = new Book(1, 'War and Peace', 'Leo Tolstoy', true);
    const customer = new Customer(1, 'Alice');

    bookstore.addBook(book);
    bookstore.addCustomer(customer);

    const result = bookstore.returnBook(1, 1); // Alice tries to return without borrowing
    expect(result).toBe(
      `Return failed. Either the book was not borrowed by the customer or customer/book does not exist.`
    );

    expect(book.available).toBe(true); // The book should still be available
    expect(customer.borrowedBooks).not.toContain(1);
  });
});
