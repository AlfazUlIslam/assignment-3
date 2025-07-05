import { Request, Response } from "express";
import Book from "../models/book.model";
import { isValidGenre, isValidISBN } from "../utils";

// @desc      Create a book
// @method    POST
// @endpoint  /api/books
export const createBook = async (req: Request, res: Response) => {
    try {
        const body = req.body;

        if (!body.title) {
          res.status(404).json({
            success: false,
            message: "Book title required"
          });
          return;
        }
        
        if (!body.author) {
          res.status(404).json({
            success: false,
            message: "Book author required"
          });
          return;
        }
        
        if (!body.description) {
          res.status(404).json({
            success: false,
            message: "Book description required"
          });
          return;
        }

        if (!isValidGenre(body.genre)) {
          res.status(404).json({
            success: false,
            message: "Only following genres are allowed: FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY."
          });
          return;
        }

        if (!isValidISBN(body.isbn)) {
          res.status(404).json({
            success: false,
            message: "ISBN must be a 13-digit number that does not start with 0."
          });
          return;
        };

        const book = await Book.create({
          ...body,
          available: body.copies > 0 ? true : false
        });

        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: book
        });
        return;
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: "Validation failed",
                success: false,
                error
            });
        } else {
            res.status(400).json({
                message: "Unknown error",
                success: false
            });
        };
        return;
    }
};

// @desc      Get all books
// @method    GET
// @endpoint  /api/books
export const getAllBooks = async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = 10;
      const skip = (page - 1) * limit;

      const [books, total] = await Promise.all([
        Book.find().skip(skip).limit(limit),
        Book.countDocuments(),
      ]);

      const totalPages = Math.ceil(total / limit);

      res.json({
        data: books,
        page,
        totalPages,
        totalItems: total,
      });
      return;
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: "Validation failed",
                success: false,
                error
            });
        } else {
            res.status(400).json({
                message: "Unknown error",
                success: false
            });
        };
        return;
    }
}

// @desc      Get book by ID
// @method    GET
// @endpoint  /api/books/:bookId
export const getBookById = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;

    const book = await Book.findById(bookId);

    if (book) {
      res.status(200).json({
        success: true,
        message: "Book retrieved successfully",
        data: book
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book not found",
        data: null
      });
    }
    return;
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
          message: "Validation failed",
          success: false,
          error
      });
    } else {
      res.status(400).json({
          message: "Unknown error",
          success: false
      });
    };
    return;
  }
};

// @desc      Update Book
// @method    PUT
// @endpoint  /api/books/:bookId
export const updateBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const body = req.body;

    if (!body.title) {
      res.status(404).json({
        success: false,
        message: "Book title required"
      });
      return;
    }
    
    if (!body.author) {
      res.status(404).json({
        success: false,
        message: "Book author required"
      });
      return;
    }
    
    if (!body.description) {
      res.status(404).json({
        success: false,
        message: "Book description required"
      });
      return;
    }

    if (!isValidGenre(body.genre)) {
      res.status(404).json({
        success: false,
        message: "Only following genres are allowed: FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY."
      });
      return;
    }

    if (!isValidISBN(body.isbn)) {
      res.status(404).json({
        success: false,
        message: "ISBN must be a 13-digit number that does not start with 0."
      });
      return;
    };

    const updateData = {
          ...body,
          available: body.copies > 0 ? true : false
    };

    const book = await Book.findByIdAndUpdate(bookId, updateData, {new: true});
    
    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book not found",
        data: null
      });
      return;
    };
    
    // if (book) {
    //   if (book.copies === 0) {
    //     book.available = false;
    //     await book.save();
    //   };
    //   if (book.copies > 0) {
    //     book.available = true;
    //     await book.save();
    //   };
    // };

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: book
    });
    return;
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
          message: "Validation failed",
          success: false,
          error
      });
    } else {
      res.status(400).json({
          message: "Unknown error",
          success: false
      });
    };
    return;
  }
}

// @desc      Delete Book
// @method    DELETE
// @endpoint  /api/books/:bookId
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;

    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: "Book not found"
      })
      return;
    }

    if (deletedBook) {
      res.status(200).json({
        success: true,
        message: "Book deleted successfully",
        data: null
      })
      return;
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
          message: "Validation failed",
          success: false,
          error
      });
    } else {
      res.status(400).json({
          message: "Unknown error",
          success: false
      });
    };
    return;
  }
};