import type { Model, Types } from "mongoose";

export interface IBook {
    title: string;
    author: string;
    genre: "FICTION" | "NON_FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY";
    isbn: string;
    description?: string;
    copies: number;
    available: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export interface IBookModelType extends Model<IBook> {
  updateAvailability(bookId: Types.ObjectId): IBook;
};