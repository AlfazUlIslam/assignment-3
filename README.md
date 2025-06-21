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