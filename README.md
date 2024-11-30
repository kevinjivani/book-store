## Project Name 
book-store

## Project Description
The Book-Store project is a simple and robust bookstore management system built using Node.js. It provides functionality to manage a collection of books and customers while facilitating book borrowing and return operations. Designed with an object-oriented approach, the system uses Book, Customer, and Bookstore classes to ensure reusability, scalability, and ease of maintenance.

The project is ideal for learning or demonstrating fundamental software design principles such as encapsulation, modularity, and method-driven functionality. It also serves as a foundational model for more complex library or inventory management systems.

## Prerequisites
Make sure you have the following installed:

- **Node.js**: Download and install [Node.js](https://nodejs.org/).

## Project Setup
1. Clone the Repository
First, clone the repository to your local machine:
```
git clone https://github.com/kevinjivani/book-store.git
```
```
cd book-store
```

2. Initialize a new npm project:
```
   npm init -y
```

3. Install the necessary dependencies for your project:

```
npm install --save-dev jest
```

4. Install `ts-node` for running TypeScript files directly (optional but helpful for development):

```
npm install ts-node --save-dev
```

5. Create a `tsconfig.json` file  

```
npx tsc --init
```

6. Run the TypeScript compiler to compile the code into JavaScript:

```
npx tsc
```

## Running the Application

Run the test cases: After compiling, run the test cases for individual modules:
```
npm test addBook.test.ts
npm test bookstore.test.ts
npm test BookstoreBorrowInvalidBookID.test.ts
npm test BookstoreBorrowInvalidCustomerID.test.ts
npm test BookstoreBorrowMultipleBooks.test.ts
npm test BookstoreReturnInvalidBookID.test.ts
npm test BookstoreReturnInvalidCustomerID.test.ts
npm test borrowBook.test.ts
npm test returnBook.test.ts
```

Run all the test cases at once :

```
npm test
```


## License
This project is licensed under the MIT License. See the LICENSE file for details.