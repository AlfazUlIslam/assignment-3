import { Schema, model } from "mongoose";
import { IBook, IBookModelType } from "../@types/book";

const bookSchema = new Schema<IBook, IBookModelType>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
        type: String,
        enum: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
        required: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    description: { type: String },
    copies: { 
        type: Number,
        min: [0, "Copies must be a positive number"],
        required: true 
    },
    available: { type: Boolean, default: true }
}, {
    timestamps: true,
    versionKey: false
});

bookSchema.static('updateAvailability', async function (bookId: Schema.Types.ObjectId) {
    const book = await this.findById(bookId);
    if (!book) return null;
    if (book.copies === 0) {
        book.available = false;
        await book.save();
    }
    return book;
});

const Book = model<IBook, IBookModelType>("Book", bookSchema);

export default Book;