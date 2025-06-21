# Library Management API
A Node.js/Express REST API for managing books, borrowing activity, and inventory in a library system.

# Features
- CRUD operations for books
- Borrow and return books with due dates
- Mongoose models with validations
- Aggregation summaries for borrow data
- RESTful API architecture
- MongoDB Atlas integration

# Project Structure
```bash
/project-root
├── src
    ├── @types
        ├── book.d.ts
        ├── borrow.d.ts
    ├── config/
        ├── db.ts
    ├── controllers/
        ├── book.controller.ts
        ├── borrow.controller.ts
    ├── models/
        ├── book.model.ts
        ├── borrow.model.ts
    ├── routes/
        ├── book.routes.ts
        ├── borrow.routes.ts
    ├── app.js
    ├── main.js
├── .env
├── package.json
└── README.md
```

# Setup Instructions
## 1. Clone the Repository
```bash
git clone https://github.com/AlfazUlIslam/assignment-3.git
cd assignment-3
```
## 2. Install Dependencies
```bash
npm i
```
## 3. Configure Environment Variables
Create a <mark style="background:slategrey; padding:2px; border-radius:2px;">.env</mark> file in the root directory
```env
PORT=your-desired-port
DATABASE_URI=your-mongodb-connection-string
```
## 4. Run the Server
```bash
npm run dev
```
Server will start on your configured PORT.

# API Endpoints
## Books
<table>
    <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>POST</td>
        <td><mark style="background:slategrey; padding:2px; border-radius:2px;">/api/books</mark></td>
        <td>Create A Book</td>
    <tr/>
    <tr>
        <td>GET</td>
        <td><mark style="background:slategrey; padding:2px; border-radius:2px;">/api/books</mark></td>
        <td>Get all books</td>
    <tr/>
    <tr>
        <td>GET</td>
        <td><mark style="background:slategrey; padding:2px; border-radius:2px;">/api/books/:id</mark></td>
        <td>Get a book by ID</td>
    <tr/>
    <tr>
        <td>PUT</td>
        <td><mark style="background:slategrey; padding:2px; border-radius:2px;">/api/books/:id</mark></td>
        <td>Update an existing book</td>
    <tr/>
    <tr>
        <td>DELETE</td>
        <td><mark style="background:slategrey; padding:2px; border-radius:2px;">/api/books/:id</mark></td>
        <td>delete a book</td>
    <tr/>
</table>

## Borrow
<table>
    <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>POST</td>
        <td><mark style="background:slategrey; padding:2px; border-radius:2px;">/api/borrow</mark></td>
        <td>Borrow a book</td>
    <tr/>
    <tr>
        <td>GET</td>
        <td><mark style="background:slategrey; padding:2px; border-radius:2px;">/api/borrow</mark></td>
        <td>Get summary of borrowed books</td>
    <tr/>
</table>

# Sample JSON Payload
- Create A Book
```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5,
  "available": true
}
```
- Update Book
```json
{
  "copies": 50
}
```
- Borrow A Book
```json
{
  "book": "64ab3f9e2a4b5c6d7e8f9012",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
```