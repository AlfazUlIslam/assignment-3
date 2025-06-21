import { Request, Response } from "express";
import Book from "../models/book.model";
import Borrow from "../models/borrow.model";

// @desc     Borrow a book
// @method   POST
// @endpoint /api/borrow
export const borrowABook = async (req: Request, res: Response) => {
    try {
        const { book, quantity, dueDate } = req.body;

        const requestedBook = await Book.findById(book);

        if (requestedBook?.copies) {
            // If available copies are less than requested quantity
            if (requestedBook?.copies < quantity) {
                res.status(409).json({
                    success: false,
                    message: "Out of stock or less copies available",
                    data: null
                });
                return
            };

            // If available copies are more or equal than requested quantity
            if (requestedBook?.copies >= quantity) {
                // Deduct requested quantity
                await Book.findByIdAndUpdate(book, { copies: (requestedBook?.copies - quantity) }, { new: true });

                // Update availability using static method
                await Book.updateAvailability(book);

                // Save borrow record
                const borrow = await Borrow.create({
                    book,
                    quantity,
                    dueDate
                });

                res.status(200).json({
                    success: true,
                    message: "Book borrowed successfully",
                    data: borrow
                });
                return;
            }
        };
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

// @desc     Borrowed Books Summary
// @method   GET
// @endpoint /api/borrow
export const summBorrBooks = async (req: Request, res: Response) => {
    try {
        const summary = await Borrow.aggregate([
            {
                $group: {
                    _id: "$book",
                    totalQuantity: { $sum: "$quantity" }
                }
            },
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "_id",
                    as: "bookInfo"
                }
            },
            {
                $unwind: "$bookInfo"
            },
            {
                $project: {
                    _id: 0,
                    book: {
                        title: "$bookInfo.title",
                        isbn: "$bookInfo.isbn"
                    },
                    totalQuantity: 1
                }
            }
        ]);

    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary
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